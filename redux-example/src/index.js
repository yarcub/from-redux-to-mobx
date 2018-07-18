import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import io from 'socket.io-client';

const socket = io('http://localhost:8000')
socket.on('connection', () => {
  console.log('Connected, send those tweets my way!')
})
socket.on('tweet', tweet => {
  console.log(tweet)
})

ReactDOM.render(<App />, document.getElementById('root'));



