import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';






ReactDOM.render(<App name="react-router-test"/>, document.getElementById('root'));
registerServiceWorker();

