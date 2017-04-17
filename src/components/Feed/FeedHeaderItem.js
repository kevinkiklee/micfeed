import React from 'react';

const FeedHeaderItem = ({ iconClass, action }) => {
  return (
    <button className='sortIconButton'
            onClick={() => action()}>
      <i className={iconClass} aria-hidden='true'/>
    </button>
  );
};

export default FeedHeaderItem;
