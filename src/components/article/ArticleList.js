import React from 'react';

import Article from './Article';

const buildArticleList = (articles) => {
  return articles.map((article) => (
    <Article key={article.id} article={article}/>
  ));
};

const ArticleList = ({ articles }) => {
  const articleList = buildArticleList(articles);

  return (
    <tbody>
      { articleList }
    </tbody>
  );
};

export default ArticleList;
