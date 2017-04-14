import React from 'react';
import { connect } from 'react-redux';

import { getAllArticles } from '../../reducers/selectors';
import { fetchFeed } from '../../actions/feedActions';
// import { byAuthorAsc } from '../../util/sortUtil';

import sortBy from 'lodash/sortBy';

import Feed from './Feed';
import Button from './Button';

class FeedContainer extends React.Component {
  constructor(props) {
    super(props);

    this.articleCount = 10;

    this.state = {
      articlesLoaded: false,
      articles: []
    };

    this.buildArticles = this.buildArticles.bind(this);
    this.increaseArticleCount = this.increaseArticleCount.bind(this);

    this.sortByColumn = this.sortByColumn.bind(this);
  }

  componentDidMount() {
    this.props.fetchFeed()
              .then(() => this.setState({ articlesLoaded: true }));
  }

  componentWillReceiveProps(newProps) {
    if (this.props !== newProps) {
      this.buildArticles(newProps.articles);
    }
  }

  increaseArticleCount(e) {
    this.articleCount += 10;
    this.buildArticles(this.props.articles);
  }

  buildArticles(articles) {
    this.setState({
      articles: articles.slice(0, this.articleCount)
    });
  }

  byAuthorAsc(a, b) {
    const aName = `${a.profile.first_name} ${a.profile.last_name}`;
    const bName = `${b.profile.first_name} ${b.profile.last_name}`;

    if(aName < bName) return -1;
    if(aName > bName) return 1;
    return 0;
  }

  sortByColumn(column, order) {
    const copiedArticles = [...this.state.articles];

    const sortActions = {
      author: {
        asc: sortBy(copiedArticles, (o) => {
          return `${o.profile.first_name} ${o.profile.last_name}`;
        }),
        desc: sortBy(copiedArticles, (o) => {
          return `${o.profile.first_name} ${o.profile.last_name}`;
        }).reverse(),
      },
      words: {
        asc: sortBy(copiedArticles, (o) => o.words),
        desc: sortBy(copiedArticles, (o) => o.words).reverse(),
      },
      submitted: {
        asc: sortBy(copiedArticles, (o) => o.publish_at),
        desc: sortBy(copiedArticles, (o) => o.publish_at).reverse(),
      }
    };

    const sortedArticles = sortActions[column][order];

    this.setState({ articles: sortedArticles });
  }

  render() {
    let articles = 'Loading...';
    let button = '';

    if (this.state.articlesLoaded) {
      articles = <Feed articles={this.state.articles}
                       sort={this.sortByColumn}/>;
      button = <Button type='load'
                       onClick={this.increaseArticleCount}/>;
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
    articles: getAllArticles(state),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchFeed: () => dispatch(fetchFeed()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedContainer);
