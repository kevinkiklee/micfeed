import React from 'react';

const SortButton = ({ iconClass, onClick }) => {
  return (
    <button className='sortIconButton'
            onClick={onClick}>
      <i className={iconClass}
         aria-hidden='true'/>
    </button>
  );
};

export default SortButton;
