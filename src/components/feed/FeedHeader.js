import React from 'react';

const FeedHeader = () => {
  return (
    <thead className='FeedHeader'>
      <tr>
        <th className='summary'>Unpublished Articles</th>
        <th className='author'>Author</th>
        <th className='wordCount'>Words</th>
        <th className='submitDate'>Submitted</th>
      </tr>
    </thead>
  );
};

export default FeedHeader;
