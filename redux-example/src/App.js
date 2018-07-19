import React, { Component } from 'react';
import './App.css';
import Timeline from './components/TweetTimeline'
import io from 'socket.io-client';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { tweets: [] };
    this.pushTweet = this.pushTweet.bind(this)
  }

  componentDidMount() {
    const socket = io('http://localhost:8000')
    socket.on('connection', () => {
      console.log('Connected, send those tweets my way!')
    })
    socket.on('tweet', this.pushTweet)
  }

  pushTweet(tweet) {
    console.log(tweet)
    this.setState({tweets: this.state.tweets.concat([tweet])})
  }

  render() {
    console.log(`Rendering ${this.state.tweets.length}`)
    return (
      <div className="App">
        <Timeline tweets={this.state.tweets}/>
      </div>
    );
  }
}

export default App;
