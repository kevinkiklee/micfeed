import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

document.addEventListener('DOMContentLoaded', () => {
  console.log('domcontentloaded');
  const root = document.getElementById('root');

  const store = { test: 'abc' };

  ReactDOM.render(<App store={store}/>, root);
});
