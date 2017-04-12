import React from 'react';

import Article from '../article/Article';
import FeedHeader from './FeedHeader';

class Feed extends React.Component {
  constructor(props) {
    super(props);

    this.buildArticleRow = this.buildArticleRow.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (this.props !== newProps) {
      this.setState({ articles: newProps.feed });
    }
  }

  buildArticleRow() {
    const rows = this.state.articles.map((article) => (
      <Article key={article.id} article={article}/>
    ));

    return (
      <tbody>{ rows }</tbody>
    );
  }

  render() {
    let articles = <tbody><tr><td>Loading...</td></tr></tbody>;

    if (this.state)
      articles = this.buildArticleRow();

    return(
      <table>
        <FeedHeader/>
        { articles }
      </table>
    );
  }
}

export default Feed;
