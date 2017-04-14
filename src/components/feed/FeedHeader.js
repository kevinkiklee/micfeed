import React from 'react';

import FeedHeaderItem from './FeedHeaderItem';

const FeedHeader = ({ action, selector, sort }) => {
  let authorSelected = '';
  let wordsSelected = '';
  let submittedSelected = '';

  // if (selector !== undefined) {
  //   if (selector.column === 'author') {
  //     if (selector.order === 'asc') {
  //       authorSelected = 'asc';
  //     } else {
  //       authorSelected = 'desc';
  //     }
  //   } else if (selector.column === 'words') {
  //     selector.order === 'asc' ? wordsSelected = 'asc' : wordsSelected = 'desc';
  //   } else if (selector.column === 'submitted') {
  //     selector.order === 'asc' ? submittedSelected = 'asc' : submittedSelected = 'desc';
  //   }
  // }
  // debugger

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




// <th className='author'>
//   <h3>Author
//   <span className='sortIcons'>
//     <i className="fa fa-arrow-circle-up" aria-hidden="true"></i>
//     <i className="fa fa-arrow-circle-down" aria-hidden="true"></i>
//   </span>
//   </h3>
// </th>
