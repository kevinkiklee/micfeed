import React from 'react';

import FeedHeaderItem from './FeedHeaderItem';

const FeedHeader = ({ action, sort }) => {
  return (
    <thead className='FeedHeader'>
      <tr>
        <th className='summary'>
          <h3>Unpublished Articles</h3>
        </th>

        <FeedHeaderItem name='author'
                        sort={sort}/>

        <FeedHeaderItem name='words'
                        sort={sort}/>

        <FeedHeaderItem name='submitted'
                        sort={sort}/>
      </tr>
    </thead>
  );
};

export default FeedHeader;
