import React from 'react';
import cookie from 'react-cookie';

import SortButton from './SortButton';

const FeedHeaderItem = ({ name, actions }) => {
  const displayName = name.charAt(0).toUpperCase() + name.slice(1, name.length);

  let clearSortButton = '';

  let ascDisabled = false;
  let dscDisabled = false;

  let sortAsc = 'fa fa-arrow-circle-up';
  let sortDsc = 'fa fa-arrow-circle-down';

  const [cookieName, cookieOrder] = cookie.load('sortedBy').split('-');

  if (name === cookieName) {
    if (cookieOrder === 'asc') {
      sortAsc += ' iconSelected';
      ascDisabled = true;
    } else {
      sortDsc += ' iconSelected';
      dscDisabled = true;
    }

    clearSortButton =
      <SortButton iconClass='fa fa-times-circle'
                  onClick={() => actions.clearSort()}/>;
  }

  return (
    <th className={name}>
      <h3>{displayName}
      <span className='sortIcons'>
        <SortButton iconClass={sortAsc}
                    onClick={() => actions.sortColumn(name, 'asc')}
                    disabled={ascDisabled}/>
        <SortButton iconClass={sortDsc}
                    onClick={() => actions.sortColumn(name, 'dsc')}
                    disabled={dscDisabled}/>
        { clearSortButton }
      </span>
      </h3>
    </th>
  );
};

export default FeedHeaderItem;
