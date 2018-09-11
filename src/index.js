import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './router/route';
//import App from '@/modules/jujia/youxianOldServe'
// import store from '@/store'
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import {createStore} from 'redux'
import reducer from './reducers'
import {addTodo,toggledo} from './action'
import { composeWithDevTools } from 'redux-devtools-extension'
import FastClick from 'fastclick';
FastClick.attach(document.body);
const store = createStore(reducer,composeWithDevTools())
console.log(store.getState())
//ReactDOM.render(<App name="react-router" store={store.jujia}/>, document.getElementById('root'));
ReactDOM.render(<Provider store={store}><App name="react-router"/></Provider>, document.getElementById('root'));
registerServiceWorker();

