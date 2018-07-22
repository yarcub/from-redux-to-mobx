import React, { Component } from 'react';
import './App.css';
import Header from './containers/HeaderContainer';
import TweetTimeline from './containers/TimelineContainer';
import TopicSearch from './containers/SearchContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <TweetTimeline />
      </div>
    );
  }
}

export default App;
