import React from 'react';

const LoadMoreButton = ({ disabled, onClick }) => {
  return (
    <button disabled={disabled}
            onClick={onClick}>
      Load More...
    </button>
  );
};

export default LoadMoreButton;
