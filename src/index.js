import React from 'react';
import ReactDOM from 'react-dom';
import cookie from 'react-cookie';
import configureStore from './store/store';

import Root from './Root.js';

import './index.css';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const sortedBy = cookie.load('sortedBy');
  const preloadedState = { sort: {} };

  if (sortedBy) {
    const [column, order] = sortedBy.split('-');
    preloadedState.sort.column = column;
    preloadedState.sort.order = order;
  } else {
    cookie.save('sortedBy', '');
  }

  const store = configureStore(preloadedState);

  ReactDOM.render(<Root store={store}/>, root);
});
