import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.scss';
import App from './App';
import { HashRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <Router basename='/'>
    <App />
  </Router>,
  document.getElementById('root')
);
