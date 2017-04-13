import React from 'react';

import FeedHeaderItem from './FeedHeaderItem';

const FeedHeader = ({ action }) => {
  return (
    <thead className='FeedHeader'>
      <tr>
        <th className='summary'>
          <h3>Unpublished Articles</h3>
        </th>

        <FeedHeaderItem name='author' action={action}/>
        <FeedHeaderItem name='words' action={action}/>
        <FeedHeaderItem name='submitted' action={action}/>
      </tr>
    </thead>
  );
};

export default FeedHeader;




// <th className='author'>
//   <h3>Author
//   <span className='sortIcons'>
//     <i className="fa fa-arrow-circle-up" aria-hidden="true"></i>
//     <i className="fa fa-arrow-circle-down" aria-hidden="true"></i>
//   </span>
//   </h3>
// </th>
