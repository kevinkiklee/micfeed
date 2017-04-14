import React from 'react';

const LoadMoreButton = ({ disabled, onClick }) => {
  let text = 'Load More';

  if (disabled) {
    text = 'No articles remaining';
  }

  return (
    <button className='LoadMoreButton'
            disabled={disabled}
            onClick={onClick}>
      <i className="fa fa-plus-circle" aria-hidden="true"/>
      { text }
    </button>
  );
};

export default LoadMoreButton;
