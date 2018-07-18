const Hapi = require('hapi');
const TwitterStream = require('twitter-stream-api');
const fs = require('fs')
const socketio = require('socket.io')
const keys = require('./credentials.js')
 
const clients = new Map()

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
 
var Twitter = new TwitterStream(keys, true);
Twitter.stream('statuses/filter', {
    track: ['javascript','portugal']
})
Twitter.on('connection success', function (uri) {
  console.log('Twitter Stream connection success', uri);
});
Twitter.on('data', data => {
  clients.forEach((socket => {
    socket.emit('tweet',{
      user: data.user.screen_name,
      text: data.text
    })
  }))
})

io.on('connection', function (socket) {
  console.log(`Client Connected: ${socket.id}`)
  clients.set(socket.id, socket)
});

init();