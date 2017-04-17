import React from 'react';

const FeedHeaderItem = ({ iconClass, disabled, action }) => {
  const icon = <i className={iconClass}
                  aria-hidden='true'/>;

  const sort = (e) => {
    action();
  };

  if (disabled) {
    return (
      <span className='sortIconButton'>
        { icon }
      </span>
    );
  } else {
    return (
      <button className='sortIconButton'
              onClick={sort}>
        { icon }
      </button>
    );
  }
};

export default FeedHeaderItem;
