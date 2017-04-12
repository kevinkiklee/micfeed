import React from 'react';

import Summary from './Summary';
import Author from './Author';
import WordCount from './WordCount';
import SubmitDate from './SubmitDate';

const Article = ({ article }) => {
  const summary = {
    image: article.image,
    title: article.title,
    link: article.url,
    tags: article.tags,
  };

  return (
    <tr>
      <Summary summary={summary}/>
      <Author profile={article.profile}/>
      <WordCount count={article.words}/>
      <SubmitDate date={article.publish_at}/>
    </tr>
  );
};

export default Article;
