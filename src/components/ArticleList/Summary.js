import React from 'react';

import PreviewImage from './PreviewImage';
import Title from './Title';
import TagList from './TagList';

import '../../styles/ArticleList/Summary.css';

const Summary = ({ summary }) => {
  return (
    <td className='Summary'>
      <PreviewImage image={summary.image}
                    alt={summary.title}
                    link={summary.link}/>
      <div className='SummaryTextContainer'>
        <Title title={summary.title}
               link={summary.link}/>
        <TagList tags={summary.tags}/>
      </div>
    </td>
  );
};

export default Summary;
