import React from 'react';
import Article from './Article';

class Feed extends React.Component {
  constructor(props) {
    super(props);
    //
    // this.state = {
    //   feed: props.feed
    // };

    this.buildFeedHeader = this.buildFeedHeader.bind(this);
    this.buildArticleRow = this.buildArticleRow.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (this.props !== newProps) {
      this.setState({ articles: newProps.feed });
    }
  }

  buildFeedHeader() {
    return(
      <tr>
        <th>Unpublished Articles</th>
        <th>Author</th>
        <th>Words</th>
        <th>Published At</th>
      </tr>
    );
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
    let content = <tbody><tr><td>Loading...</td></tr></tbody>;

    if (this.state)
      content = this.buildArticleRow();

    return(
      <table>
        <thead>
          { this.buildFeedHeader() }
       </thead>

         { content }

      </table>
    );
  }
}

export default Feed;
