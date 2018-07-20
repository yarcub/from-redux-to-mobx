import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import io from 'socket.io-client';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers'
import {actions} from './actions'
import App from './App';
import createSagaMiddleware from 'redux-saga'
import './index.css';
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, undefined, composeWithDevTools(
  applyMiddleware(sagaMiddleware)
))

sagaMiddleware.run(rootSaga)


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



