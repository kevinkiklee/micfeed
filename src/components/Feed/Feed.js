import React from 'react';

import ArticleList from '../ArticleList/ArticleList';
import FeedHeader from './FeedHeader';
import LoadMoreButton from './LoadMoreButton';

const Feed = (props) => {
  return (
    <div className='FeedWrapper'>
      <table className='Feed'>
        <FeedHeader articleCount={props.articleCount}/>
        <ArticleList articles={props.articles}/>
      </table>
      <LoadMoreButton disabled={props.disableLoadMore}
                      onClick={props.onLoadMoreClick}/>
    </div>
  );
};

export default Feed;
