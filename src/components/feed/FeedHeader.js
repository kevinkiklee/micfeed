import React from 'react';

import FeedHeaderItem from './FeedHeaderItem';

const FeedHeader = ({ sortActions, articleCount }) => {
  return (
    <thead className='FeedHeader'>
      <tr>
        <th className='summary'>
          <h3>Unpublished Articles <span>({ articleCount })</span></h3>
        </th>
        <FeedHeaderItem name='author' actions={sortActions}/>
        <FeedHeaderItem name='words' actions={sortActions}/>
        <FeedHeaderItem name='submitted' actions={sortActions}/>
      </tr>
    </thead>
  );
};

export default FeedHeader;
