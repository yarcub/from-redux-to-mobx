import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Store from './stores/RootStore'
import { Provider } from 'mobx-react'
import io from 'socket.io-client';

const store = new Store()

ReactDOM.render(
  <Provider appStore={store.appStore}>
    <App />
  </Provider>
, document.getElementById('root'));

// Bind actions with tweet stream
const socket = io('http://localhost:8000')
socket.on('connection', () => {
  console.log('Connected, send those tweets my way!')
})
socket.on('tweet', (tweet) => {
  store.twitterStore.addTweet(tweet)
})

window.__store = store