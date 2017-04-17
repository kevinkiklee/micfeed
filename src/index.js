import React from 'react';
import ReactDOM from 'react-dom';
import cookie from 'react-cookie';
import configureStore from './store/store';

import Root from './Root.js';

import './index.css';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const sort = cookie.load('sort');
  const preloadedState = { sort: {} };

  if (sort) {
    const [column, order] = sort.split('-');
    preloadedState.sort.column = column;
    preloadedState.sort.order = order;
  } else {
    cookie.save('sort', '');
  }

  const store = configureStore(preloadedState);

  ReactDOM.render(<Root store={store}/>, root);
});
