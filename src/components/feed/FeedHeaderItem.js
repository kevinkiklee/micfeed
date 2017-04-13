import React from 'react';

const FeedHeaderItem = ({ name, selected, action }) => {
  const displayName = name.charAt(0).toUpperCase() + name.slice(1, name.length);

  let sortAsc = 'fa fa-arrow-circle-up';
  let sortDesc = 'fa fa-arrow-circle-down';

  if (selected !== '') {
    selected === 'asc' ? sortAsc += ' iconSelected' : sortDesc += ' iconSelected';
  }

  return (
    <th className={name}>
      <h3>{displayName}
      <span className='sortIcons'>
        <i className={sortAsc} aria-hidden="true"></i>
        <i className={sortDesc} aria-hidden="true"></i>
      </span>
      </h3>
    </th>
  );
};

export default FeedHeaderItem;
