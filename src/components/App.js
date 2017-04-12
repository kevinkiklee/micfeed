import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';

import FeedContainer from './feed/FeedContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>MicFeed</h2>
        </div>
        <FeedContainer/>
      </div>
    );
  }
}

export default App;
