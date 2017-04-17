import React from 'react';
import ReactDOM from 'react-dom';
import cookie from 'react-cookie';
import configureStore from './store/store';

import Root from './Root.js';

import './styles/index.css';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const preloadedState = { sort: {} };

  // If the cookie exists, set the value as the preloadedState
  const sortCookie = cookie.load('sort');

  if (sort) {
    const [column, order] = sortCookie.split('-');
    preloadedState.sort.column = column;
    preloadedState.sort.order = order;
  }

  const store = configureStore(preloadedState);

  ReactDOM.render(<Root store={store}/>, root);
});
