import React from 'react';

import ArticleList from '../article/ArticleList';
import FeedHeader from './FeedHeader';
import LoadMoreButton from './LoadMoreButton';

import '../../styles/Feed.css';

class Feed extends React.Component {
  render() {
    return(
      <div className='FeedWrapper'>
        <table className='Feed'>
          <FeedHeader sort={this.props.sort}
                      clearSort={this.props.clearSort}/>
          <ArticleList articles={this.props.articles}/>
        </table>
        <LoadMoreButton disabled={this.props.disableLoadMore}
                        onClick={this.props.onLoadMoreClick}/>
      </div>
    );
  }
}

export default Feed;
