import React, { Component } from 'react';
import './App.css';
import Timeline from './containers/TimelineContainer'
import Header from './containers/HeaderContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Timeline />
      </div>
    );
  }
}

export default App;
