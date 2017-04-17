import React from 'react';

const TagList = ({ tags }) => {
  const tagItems = tags.map((tag) => (
                     <div key={tag.id} className='TagItem'>
                       { tag.name }
                     </div>
                   ));
  return (
    <div className='TagList'>
      { tagItems }
    </div>
  );
};

export default TagList;
