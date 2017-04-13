import React from 'react';

const TagItem = ({ tag }) => {
  return (
    <button>{ tag.name }</button>
  );
};

export default TagItem;
