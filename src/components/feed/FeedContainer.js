import React from 'react';
import { connect } from 'react-redux';

import { getAllArticles } from '../../reducers/selectors';
import { fetchFeed } from '../../actions/feedActions';
import Sort from '../../util/sortUtil';

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

  sortByColumn(column, order) {
    // debugger
    console.log('sort button clicked');
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
