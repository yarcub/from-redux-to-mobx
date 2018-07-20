import React, { Component } from 'react';
import './App.css';
import Timeline from './containers/TimelineContainer'
import Header from './containers/HeaderContainer'
import TopicSearch from './containers/SearchContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Timeline />
        <TopicSearch />
      </div>
    );
  }
}

export default App;
