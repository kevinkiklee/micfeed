import React from 'react';

import Summary from './article/Summary';
import Author from './article/Author';
import WordCount from './article/WordCount';
import PublishedDate from './article/PublishedDate';

const Article = (props) => {
  return (
    <tr>
      <Summary />
      <td>{}</td>
      <td>{ props.article.words }</td>
      <td>{ props.article.publish_at }</td>
    </tr>
  );
};

export default Article;
