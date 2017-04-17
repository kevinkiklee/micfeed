import React from 'react';

import Article from './Article';
import '../../styles/ArticleList/ArticleList.css';

const buildArticleList = (articles) => {
  return articles.map((article) => (
    <Article key={article.id} article={article}/>
  ));
};

const ArticleList = ({ articles }) => {
  return (
    <tbody className='ArticleList'>
      { buildArticleList(articles) }
    </tbody>
  );
};

export default ArticleList;
