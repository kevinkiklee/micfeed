import React from 'react';

import TagItem from './TagItem';

const buildTagList = (tags) => {
  return tags.map((tag) => (
    <TagItem key={tag.id} tag={tag}/>
  ));
};

const TagList = ({ tags }) => {
  return (
    <div>
      { buildTagList(tags) }
    </div>
  );
};

export default TagList;
