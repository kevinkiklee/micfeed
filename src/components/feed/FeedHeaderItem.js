import React from 'react';

const FeedHeaderItem = ({ name, selected, sort }) => {
  const displayName = name.charAt(0).toUpperCase() + name.slice(1, name.length);

  let sortAsc = 'fa fa-arrow-circle-up';
  let sortdsc = 'fa fa-arrow-circle-down';

  if (selected !== '') {
    selected === 'asc' ? sortAsc += ' iconSelected' : sortdsc += ' iconSelected';
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
          <i className={sortdsc}
            aria-hidden="true"/>
        </button>
      </span>
      </h3>
    </th>
  );
};

export default FeedHeaderItem;
