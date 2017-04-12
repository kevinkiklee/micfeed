import React from 'react';

import TagItem from './TagItem';

const buildTagList = (tags) => {
  return tags.map((tag) => (
    <TagItem key={tag.id} tag={tag}/>
  ));
};

const TagList = ({ tags }) => {
  const tagList = buildTagList(tags);

  return (
    <div>
      { tagList }
    </div>
  );
};

export default TagList;
