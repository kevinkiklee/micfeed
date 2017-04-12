import React from 'react';

import PreviewImage from './PreviewImage';
import Title from './Title';

const Summary = ({ summary }) => {
  return (
    <td>
      <PreviewImage image={summary.image}
                    alt={summary.title}/>
      <Title title={summary.title}/>
    </td>
  );
};

export default Summary;
