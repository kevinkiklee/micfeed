import React from 'react';

const TagItem = ({ tag }) => {
  return (
    <div className='TagItem'>{ tag.name }</div>
  );
};

export default TagItem;
