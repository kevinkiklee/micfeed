import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './Root.js';
import './index.css';

document.addEventListener('DOMContentLoaded', () => {
  console.log('domcontentloaded');
  const root = document.getElementById('root');

  const store = configureStore();
  ReactDOM.render(<Root store={store}/>, root);
});
