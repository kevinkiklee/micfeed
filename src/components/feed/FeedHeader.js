import React from 'react';

import FeedHeaderItem from './FeedHeaderItem';

const FeedHeader = ({ action, sort, clearSort }) => {
  return (
    <thead className='FeedHeader'>
      <tr>
        <th className='summary'>
          <h3>Unpublished Articles</h3>
        </th>
        <FeedHeaderItem name='author'
                        sort={sort}
                        clearSort={clearSort}/>
        <FeedHeaderItem name='words'
                        sort={sort}
                        clearSort={clearSort}/>
        <FeedHeaderItem name='submitted'
                        sort={sort}
                        clearSort={clearSort}/>
      </tr>
    </thead>
  );
};

export default FeedHeader;
