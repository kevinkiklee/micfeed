import React from 'react';

import FeedHeaderItem from './FeedHeaderItem';

const FeedHeader = ({ action, selector }) => {
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
                        action={action}/>

        <FeedHeaderItem name='words'
                        selected={wordsSelected}
                        action={action}/>

        <FeedHeaderItem name='submitted'
                        selected={submittedSelected}
                        action={action}/>

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
