import React from 'react';
import ReactDOM from 'react-dom';
import cookie from 'react-cookie';
import configureStore from './store/store';

import Root from './Root.js';

import './index.css';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();

  if (!cookie.load('sortedBy')) {
    cookie.save('sortedBy', '');
  }

  ReactDOM.render(<Root store={store}/>, root);
});
