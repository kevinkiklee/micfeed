import React from 'react';

import FeedHeaderItem from './FeedHeaderItem';

const FeedHeader = ({ articleCount }) => {
  return (
    <thead className='FeedHeader'>
      <tr>
        <th className='summary'>
          <h3>Unpublished Articles <span>({ articleCount })</span></h3>
        </th>
        <FeedHeaderItem column='author'/>
        <FeedHeaderItem column='words'/>
        <FeedHeaderItem column='submitted'/>
      </tr>
    </thead>
  );
};

export default FeedHeader;
