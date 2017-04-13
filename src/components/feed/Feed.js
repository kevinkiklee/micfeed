import React from 'react';

import ArticleList from '../article/ArticleList';
import FeedHeader from './FeedHeader';

import '../../styles/Feed.css';

class Feed extends React.Component {
  constructor(props) {
    super(props);

    this.articleCount = 10;

    this.state = {
      articles: this.props.feed
    };
  }

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
