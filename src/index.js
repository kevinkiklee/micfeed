import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

import Root from './Root.js';

import './index.css';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  const preloadedState = {
    sortedBy: 'words-asc'
  };

  const store = configureStore(preloadedState);

  ReactDOM.render(<Root store={store}/>, root);
});
