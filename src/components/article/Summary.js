import React from 'react';

import PreviewImage from './PreviewImage';
import Title from './Title';
import TagList from './TagList';

const Summary = ({ summary }) => {
  return (
    <td>
      <PreviewImage image={summary.image}
                    alt={summary.title}/>
      <Title title={summary.title}/>
      <TagList tags={summary.tags}/>
    </td>
  );
};

export default Summary;
