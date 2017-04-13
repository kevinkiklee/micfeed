import React from 'react';

import ArticleList from '../article/ArticleList';
import FeedHeader from './FeedHeader';

import '../../styles/Feed.css';

class Feed extends React.Component {
  render() {
    return(
      <table className='Feed'>
        <FeedHeader/>
        <ArticleList articles={this.props.articles}/>
      </table>
    );
  }
}

export default Feed;
