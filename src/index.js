import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './router/route';
import registerServiceWorker from './registerServiceWorker';

import FastClick from 'fastclick';
FastClick.attach(document.body);


ReactDOM.render(<App name="react-router-test"/>, document.getElementById('root'));
registerServiceWorker();

