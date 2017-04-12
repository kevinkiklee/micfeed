import React from 'react';

const Article = (props) => {
  return (
    <tr>
      <td>
        <img src={props.article.image}/>
        { props.article.title }
      </td>
      <td>{}</td>
      <td>{ props.article.words }</td>
      <td>{ props.article.publish_at }</td>
    </tr>
  );
};

export default Article;
