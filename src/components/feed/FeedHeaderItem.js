import React from 'react';
import cookie from 'react-cookie';

const FeedHeaderItem = ({ name, sort }) => {
  const displayName = name.charAt(0).toUpperCase() + name.slice(1, name.length);

  let sortAsc = 'fa fa-arrow-circle-up';
  let sortDsc = 'fa fa-arrow-circle-down';

  const [cookieName, cookieOrder] = cookie.load('sortedBy').split('-');

  if (name === cookieName) {
    if (cookieOrder === 'asc') {
      sortAsc += ' iconSelected';
    } else {
      sortDsc += ' iconSelected';
    }
  }

  return (
    <th className={name}>
      <h3>{displayName}
      <span className='sortIcons'>
        <button className='sortIconButton'
                onClick={() => sort(name, 'asc')}>
          <i className={sortAsc}
            aria-hidden="true"/>
        </button>
        <button className='sortIconButton'
                onClick={() => sort(name, 'dsc')}>
          <i className={sortDsc}
            aria-hidden="true"/>
        </button>
      </span>
      </h3>
    </th>
  );
};

export default FeedHeaderItem;
