import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './router/route';
import store from '@/store'
import registerServiceWorker from './registerServiceWorker';

import FastClick from 'fastclick';
FastClick.attach(document.body);


ReactDOM.render(<App name="react-router" store={store.jujia}/>, document.getElementById('root'));
registerServiceWorker();

