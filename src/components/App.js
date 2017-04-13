import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';

import FeedContainer from './feed/FeedContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="AppHeader">
          <h2><span>Mic</span>Feed</h2>
        </div>
        <FeedContainer/>
      </div>
    );
  }
}

export default App;

// <img src={logo} className="AppLogo" alt="logo" />
