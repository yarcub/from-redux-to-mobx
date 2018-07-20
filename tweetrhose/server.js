const Hapi = require('hapi');
const TwitterStream = require('twitter-stream-api');
const fs = require('fs')
const socketio = require('socket.io')
const keys = require('./credentials.js')
const EventEmitter = require('events')

var Twitter
const clients = new Map()

const topicEmitter = new EventEmitter()
topicEmitter.on('topics-changed', (topics) => {
  if (Twitter) {
    console.log('Closed previous twitter stream')
    Twitter.close()
  }

  Twitter = new TwitterStream(keys, true);
  Twitter.stream('statuses/filter', {
      track: topics
  })
  Twitter.on('connection success', function (uri) {
    console.log('Twitter Stream connection success', uri);
  });
  Twitter.on('data', data => {
    console.log(`Pushing tweets to ${clients.size} client`)
    clients.forEach((socket => {
      socket.emit('tweet',{
        id: data.id,
        user: {
          name: data.user.screen_name,
          avatar: data.user.profile_image_url_https,
        },
        text: data.text
      })
    }))
  })
})

const server = Hapi.server({
    port: 8000,
    host: 'localhost'
});
const io = socketio(server.listener)

const init = async () => {

    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

server.route({
	method: 'POST',
  path: '/topics',
  options: {
    cors: true
  },
	handler: function(req, h) {
    const topics = JSON.parse(req.payload).topics
    console.log(`Changing topics to ${JSON.stringify(topics)}`);
    topicEmitter.emit('topics-changed', topics)
		return h.response()
	}
});

io.on('connection', function (socket) {
  console.log(`Client Connected: ${socket.id}`)
  clients.set(socket.id, socket)
  socket.on('disconnect', reason => {
    console.log(`Client Disconnected: ${socket.id}`)
    clients.delete(socket.id)
  })
});

init();