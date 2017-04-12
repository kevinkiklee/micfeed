import React from 'react';

import Article from './Article';

const buildArticleRow = (articles) => {
  return articles.map((article) => (
    <Article key={article.id} article={article}/>
  ));
};

const ArticleList = ({ articles }) => {
  const articleRows = buildArticleRow(articles);

  return (
    <tbody>
      { articleRows }
    </tbody>
  );
};

export default ArticleList;
