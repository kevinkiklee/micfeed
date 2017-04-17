import React from 'react';

import FeedHeaderItemContainer from './FeedHeaderItemContainer';
import '../../styles/Feed/FeedHeader.css';

const FeedHeader = ({ articleCount }) => {
  return (
    <thead className='FeedHeader'>
      <tr>
        <th className='summary'>
          <h3>Unpublished Articles <span>({ articleCount })</span></h3>
        </th>
        <FeedHeaderItemContainer column='author'/>
        <FeedHeaderItemContainer column='words'/>
        <FeedHeaderItemContainer column='submitted'/>
      </tr>
    </thead>
  );
};

export default FeedHeader;
