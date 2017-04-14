import React from 'react';
import cookie from 'react-cookie';

import SortButton from './SortButton';

const FeedHeaderItem = ({ name, sort, clearSort }) => {
  const displayName = name.charAt(0).toUpperCase() + name.slice(1, name.length);

  let clearSortButton = '';

  let sortAsc = 'fa fa-arrow-circle-up';
  let sortDsc = 'fa fa-arrow-circle-down';

  const [cookieName, cookieOrder] = cookie.load('sortedBy').split('-');

  if (name === cookieName) {
    if (cookieOrder === 'asc') {
      sortAsc += ' iconSelected';
    } else {
      sortDsc += ' iconSelected';
    }

    clearSortButton =
      <SortButton iconClass='fa fa-times-circle'
                  onClick={() => clearSort()}/>;
  }

  return (
    <th className={name}>
      <h3>{displayName}
      <span className='sortIcons'>
        <SortButton iconClass={sortAsc}
                    onClick={() => sort(name, 'asc')}/>
        <SortButton iconClass={sortDsc}
                    onClick={() => sort(name, 'dsc')}/>
        { clearSortButton }
      </span>
      </h3>
    </th>
  );
};

export default FeedHeaderItem;
