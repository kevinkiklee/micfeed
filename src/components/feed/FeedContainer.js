import React from 'react';
import { connect } from 'react-redux';

import cookie from 'react-cookie';
import sortBy from 'lodash/sortBy';

import { fetchFeed } from '../../actions/feedActions';

import Feed from './Feed';

class FeedContainer extends React.Component {
  constructor(props) {
    super(props);

    this.articleCount = 10;

    this.state = {
      articles: [],
      disableLoadMore: false,
      articlesLoaded: false,
      sortedBy: cookie.load('sortedBy'),
    };

    this.addArticles = this.addArticles.bind(this);
    this.increaseArticleCount = this.increaseArticleCount.bind(this);
    this.fetchMoreArticles = this.fetchMoreArticles.bind(this);

    this.sortColumn = this.sortColumn.bind(this);
    this.clearSort = this.clearSort.bind(this);
  }

  componentDidMount() {
    this.props.fetchFeed('../data/articles.json')
              .then(() => this.setState({ articlesLoaded: true }))
              .then(() => {
                if (this.state.sortedBy) {
                  let [column, order] = this.state.sortedBy.split('-');
                  this.sortColumn(column, order);
                }
              });
  }

  componentWillReceiveProps(newProps) {
    if (this.props !== newProps) {
      this.addArticles(newProps.articles);
    }
  }

  fetchMoreArticles() {
    this.props.fetchFeed('../data/more-articles.json');
  }

  increaseArticleCount(e) {
    if (this.articleCount === 30) {
      this.fetchMoreArticles();
    }

    this.articleCount += 10;
    this.addArticles(this.props.articles);
  }

  addArticles(articles) {
    const copiedArticles = [...this.state.articles];
    const moreArticles = articles.slice(this.articleCount - 10,
                                        this.articleCount);

    let disableLoadMore = false;

    if (this.articleCount >= 60) {
      disableLoadMore = true;
    }

    this.setState({
      articles: copiedArticles.concat(moreArticles),
      disableLoadMore
    });
  }

  sortColumn(column, order) {
    const copiedArticles = [...this.state.articles];

    const sortActions = {
      author: {
        asc: () => sortBy(copiedArticles, (o) => (
          `${o.profile.first_name} ${o.profile.last_name}`
        )),
        dsc: () => sortBy(copiedArticles, (o) => (
          `${o.profile.first_name} ${o.profile.last_name}`
        )).reverse(),
      },
      words: {
        asc: () => sortBy(copiedArticles, (o) => o.words),
        dsc: () => sortBy(copiedArticles, (o) => o.words).reverse(),
      },
      submitted: {
        asc: () => sortBy(copiedArticles, (o) => o.publish_at),
        dsc: () => sortBy(copiedArticles, (o) => o.publish_at).reverse(),
      }
    };

    const articles = sortActions[column][order]();
    const sortedBy = `${column}-${order}`;

    cookie.save('sortedBy', sortedBy);

    this.setState({ articles,
                    sortedBy });
  }

  clearSort() {
    cookie.save('sortedBy', '');
    const articles = this.props.articles.slice(0, this.articleCount);
    this.setState({ articles });
  }

  render() {
    const sortActions = {
      sortColumn: this.sortColumn,
      clearSort: this.clearSort,
    };

    if (this.state.articlesLoaded) {
      return (
        <Feed articles={this.state.articles}
              sortActions={sortActions}
              disableLoadMore={this.state.disableLoadMore}
              onLoadMoreClick={this.increaseArticleCount}/>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    articles: state.feed,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchFeed: (url) => dispatch(fetchFeed(url)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedContainer);
