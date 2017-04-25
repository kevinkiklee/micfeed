import React, { Component } from 'react';
import '../styles/App.css';

import Header from './Page/Header';
import Footer from './Page/Footer';
import FeedContainer from './Feed/FeedContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <FeedContainer/>
        <Footer/>
      </div>
    );
  }
}

export default App;
