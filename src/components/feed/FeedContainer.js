import React from 'react';
import { connect } from 'react-redux';

import cookie from 'react-cookie';
import sortBy from 'lodash/sortBy';

import { fetchFeed } from '../../actions/feedActions';

import Feed from './Feed';
import Button from './Button';

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

    this.buildArticles = this.buildArticles.bind(this);
    this.addArticles = this.addArticles.bind(this);

    this.sortColumn = this.sortColumn.bind(this);
    this.fetchMoreArticles = this.fetchMoreArticles.bind(this);
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
      this.buildArticles(newProps.articles);
    }
  }

  fetchMoreArticles() {
    this.props.fetchFeed('../data/more-articles.json');
  }

  addArticles(e) {
    if (this.articleCount === 30) {
      this.fetchMoreArticles();
    }

    this.articleCount += 10;
    this.buildArticles(this.props.articles);
  }

  buildArticles(articles) {
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
        asc: sortBy(copiedArticles, (o) => {
          return `${o.profile.first_name} ${o.profile.last_name}`;
        }),
        dsc: sortBy(copiedArticles, (o) => {
          return `${o.profile.first_name} ${o.profile.last_name}`;
        }).reverse(),
      },
      words: {
        asc: sortBy(copiedArticles, (o) => o.words),
        dsc: sortBy(copiedArticles, (o) => o.words).reverse(),
      },
      submitted: {
        asc: sortBy(copiedArticles, (o) => o.publish_at),
        dsc: sortBy(copiedArticles, (o) => o.publish_at).reverse(),
      }
    };

    const sortedArticles = sortActions[column][order];
    const sortedBy = `${column}-${order}`;

    cookie.save('sortedBy', sortedBy);

    this.setState({ articles: sortedArticles,
                    sortedBy });
  }

  render() {
    let articles = 'Loading...';
    let button = '';

    if (this.state.articlesLoaded) {
      articles = <Feed articles={this.state.articles}
                       sort={this.sortColumn}/>;
      button = <Button disabled={this.state.disableLoadMore}
                       onClick={this.addArticles}/>;
    }

    return (
      <div className='FeedContainer'>
        { articles }
        { button }
      </div>
    );
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
