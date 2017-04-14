import React from 'react';

import FeedHeaderItem from './FeedHeaderItem';

const FeedHeader = ({ action, selector, sort }) => {
  let authorSelected = '';
  let wordsSelected = '';
  let submittedSelected = '';

  return (
    <thead className='FeedHeader'>
      <tr>
        <th className='summary'>
          <h3>Unpublished Articles</h3>
        </th>

        <FeedHeaderItem name='author'
                        selected={authorSelected}
                        sort={sort}/>

        <FeedHeaderItem name='words'
                        selected={wordsSelected}
                        sort={sort}/>

        <FeedHeaderItem name='submitted'
                        selected={submittedSelected}
                        sort={sort}/>
      </tr>
    </thead>
  );
};

export default FeedHeader;
