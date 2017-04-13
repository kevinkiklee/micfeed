import React from 'react';

const FeedHeader = () => {
  return (
    <thead className='FeedHeader'>
      <tr>
        <th className='summary'>
          Unpublished Articles
        </th>

        <th className='author'>
          <h3>Author
          <span className='sortIcons'>
            <i className="fa fa-arrow-circle-up" aria-hidden="true"></i>
            <i className="fa fa-arrow-circle-down" aria-hidden="true"></i>
          </span>
          </h3>
        </th>

        <th className='wordCount'>
          <h3>Words
          <span className='sortIcons'>
            <i className="fa fa-arrow-circle-up" aria-hidden="true"></i>
            <i className="fa fa-arrow-circle-down" aria-hidden="true"></i>
          </span>
          </h3>
        </th>

        <th className='submitDate'>
          <h3>Submitted
          <span className='sortIcons'>
            <i className="fa fa-arrow-circle-up" aria-hidden="true"></i>
            <i className="fa fa-arrow-circle-down" aria-hidden="true"></i>
          </span>
          </h3>
        </th>
      </tr>
    </thead>
  );
};

export default FeedHeader;
