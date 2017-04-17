import React from 'react';
import { connect } from 'react-redux';

import Feed from './Feed';

import SortUtil from '../../util/SortUtil';
import { fetchFeed } from '../../actions/feedActions';

class FeedContainer extends React.Component {
  constructor(props) {
    super(props);

    this.articleCount = 10;

    this.state = {
      articles: [],
      disableLoadMore: false,
      articlesLoaded: false,
    };

    this.addArticles = this.addArticles.bind(this);
    this.increaseArticleCount = this.increaseArticleCount.bind(this);
    this.fetchMoreArticles = this.fetchMoreArticles.bind(this);

    this.sortColumn = this.sortColumn.bind(this);
    this.clearSort = this.clearSort.bind(this);
  }

  componentDidMount() {
    this.props.fetchFeed('../data/articles.json')
              .then(() => this.setState({ articlesLoaded: true }));
  }

  componentWillReceiveProps(newProps) {
    if (this.props.articles !== newProps.articles) {
      this.addArticles(newProps.articles);
    }

    if (this.props.sort !== newProps.sort) {
      if (newProps.sort.column === '') {
        this.clearSort();
      } else {
        this.sortColumn(newProps.sort.column, newProps.sort.order);
      }
    }
  }

  fetchMoreArticles() {
    this.props.fetchFeed('../data/more-articles.json');
  }

  increaseArticleCount(e) {
    if (this.articleCount === 30)
      this.fetchMoreArticles();

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
    const sortActions = SortUtil([...this.state.articles]);

    const articles = sortActions[column][order]();
    const sort = `${column}-${order}`;

    this.setState({ articles, sort });
  }

  clearSort() {
    const articles = this.props.articles.slice(0, this.articleCount);
    this.setState({ articles });
  }

  render() {
    if (this.state.articlesLoaded) {
      return (
        <Feed articles={this.state.articles}
              articleCount={this.state.articles.length}
              disableLoadMore={this.state.disableLoadMore}
              onLoadMoreClick={this.increaseArticleCount}/>
      );
    } else {
      return (
        <div className='SpinnerWrapper'>
          <h1>Loading...</h1>
        </div>
      );
    }
  }
}

const mapStateToProps = (state, ownProps) => ({
  articles: state.feed,
  sort: state.sort,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchFeed: (url) => dispatch(fetchFeed(url)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedContainer);
