import React from 'react';

import '../../styles/Feed/Button.css';

const Button = ({ disabled, onClick }) => {
  let text = 'Load More';

  if (disabled) {
    text = 'No articles remaining';
  }

  return (
    <button className='Button'
            disabled={disabled}
            onClick={onClick}>
      <i className="fa fa-plus-circle" aria-hidden="true"/>
      { text }
    </button>
  );
};

export default Button;
