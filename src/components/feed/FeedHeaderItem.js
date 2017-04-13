import React from 'react';

const FeedHeaderItem = ({ name, action }) => {
  const displayName = name.charAt(0).toUpperCase() + name.slice(1, name.length);

  return (
    <th className={name}>
      <h3>{displayName}
      <span className='sortIcons'>
        <i className="fa fa-arrow-circle-up" aria-hidden="true"></i>
        <i className="fa fa-arrow-circle-down" aria-hidden="true"></i>
      </span>
      </h3>
    </th>
  );
};

export default FeedHeaderItem;
