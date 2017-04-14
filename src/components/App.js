import React, { Component } from 'react';
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
