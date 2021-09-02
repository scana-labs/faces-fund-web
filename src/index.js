import React from 'react';
import ReactDOM from 'react-dom';
import mixpanel from 'mixpanel-browser';
import './index.css';
import App from './App';

mixpanel.init('7903c797f632d37e6af84c7a12ffe89a');
mixpanel.track('Initial render');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);