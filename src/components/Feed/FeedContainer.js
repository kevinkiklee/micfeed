import React from 'react';
import { connect } from 'react-redux';

import Feed from './Feed';
import Spinner from './Spinner';

import SortUtil from '../../util/sortUtil';
import { fetchFeedData } from '../../actions/feedDataActions';
import { fetchFeed } from '../../actions/feedActions';
import { getFeedData,
         getFeedTotal } from '../../util/selectors';

import '../../styles/Feed/Feed.css';

class FeedContainer extends React.Component {
  constructor(props) {
    super(props);

    this.articleCount = 10;
    this.feedCount = 0;

    this.state = {
      articles: [],
      disableLoadMore: false,
      articlesLoaded: false,
    };

    this.addArticles = this.addArticles.bind(this);
    this.increaseArticleCount = this.increaseArticleCount.bind(this);
    this.fetchArticles = this.fetchArticles.bind(this);

    this.sortColumn = this.sortColumn.bind(this);
    this.clearSort = this.clearSort.bind(this);
  }

  ///////////////////////////////////
  // LIFECYCLE METHODS
  ///////////////////////////////////

  componentDidMount() {
    this.props.fetchFeedData('../data/feed-data.json')
      .then(() => this.fetchArticles())
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

    if (this.props.searchString !== newProps.searchString) {
      this.filterArticles(newProps.searchString);
    }
  }

  ///////////////////////////////////
  // ARTICLES
  ///////////////////////////////////

  fetchArticles() {
    const path = this.props.feedData[this.feedCount].path;
    this.props.fetchFeed(path)
      .then(() => (this.feedCount += 1));
  }

  increaseArticleCount(e) {
    if (this.articleCount === this.props.articles.length)
      this.fetchArticles();

    this.articleCount += 10;
    this.addArticles(this.props.articles);
  }

  addArticles(articles) {
    const copiedArticles = [...this.state.articles];
    const moreArticles = articles.slice(this.articleCount - 10,
                                        this.articleCount);

    let disableLoadMore = false;

    if (this.articleCount >= this.props.feedTotal) {
      disableLoadMore = true;
    }

    this.setState({
      articles: copiedArticles.concat(moreArticles),
      disableLoadMore
    });
  }

  resetArticles(articles) {
    return this.props.articles.slice(0, this.articleCount);
  }

  ///////////////////////////////////
  // SORT
  ///////////////////////////////////

  sortColumn(column, order) {
    const sortActions = SortUtil([...this.state.articles]);
    const articles = sortActions[column][order]();
    const sort = `${column}-${order}`;

    this.setState({ articles, sort });
  }

  clearSort() {
    const articles = this.resetArticles();
    this.setState({ articles });
  }

  ///////////////////////////////////
  // SEARCH
  ///////////////////////////////////

  filterArticles(searchString) {
    const filteredArticles = this.resetArticles().filter((article) => {
      return article.title.toLowerCase().includes(searchString);
    });

    this.setState({ articles: filteredArticles});
  }

  ///////////////////////////////////
  // RENDER
  ///////////////////////////////////

  render() {
    if (this.state.articlesLoaded) {
      return (
        <Feed articles={this.state.articles}
              articleCount={this.props.feedTotal}
              disableLoadMore={this.state.disableLoadMore}
              onLoadMoreClick={this.increaseArticleCount}/>
      );
    } else {
      return (
        <Spinner className='Spinner'/>
      );
    }
  }
}

const mapStateToProps = (state, ownProps) => ({
  articles: state.feed,
  sort: state.sort,
  searchString: state.search.string,
  feedData: getFeedData(state),
  feedTotal: getFeedTotal(state),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchFeedData: (path) => dispatch(fetchFeedData(path)),
  fetchFeed: (path) => dispatch(fetchFeed(path)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedContainer);
