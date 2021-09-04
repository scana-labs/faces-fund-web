import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import mixpanel from 'mixpanel-browser';

import App from './App';

import './index.css';

mixpanel.init('7903c797f632d37e6af84c7a12ffe89a');
mixpanel.track('Initial render');

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);