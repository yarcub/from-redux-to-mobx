import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import io from 'socket.io-client';
import { devToolsEnhancer } from 'redux-devtools-extension';
import rootReducer from './reducers'
import {actions} from './actions'
import App from './App';
import './index.css';

const store = createStore(rootReducer, undefined, devToolsEnhancer())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);

// Bind actions with tweet stream
const socket = io('http://localhost:8000')
socket.on('connection', () => {
  console.log('Connected, send those tweets my way!')
})
socket.on('tweet', (tweet) => {
  store.dispatch(actions.addTweet(tweet))
})



