import React from 'react';

import ArticleList from '../article/ArticleList';
import FeedHeader from './FeedHeader';

class Feed extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: this.props.feed
    };
  }

  render() {
    return(
      <table>
        <FeedHeader/>
        <ArticleList articles={this.state.articles}/>
      </table>
    );
  }
}

export default Feed;
