import React from 'react';

const FeedHeaderItem = ({ iconClass, disabled, onClick }) => {
  const icon = <i className={iconClass}
                  aria-hidden='true'/>;

  if (disabled) {
    return (
      <span className='sortIconButton'>
        { icon }
      </span>
    );
  } else {
    return (
      <button className='sortIconButton'
              onClick={onClick}>
        { icon }
      </button>
    );
  }
};

export default FeedHeaderItem;
