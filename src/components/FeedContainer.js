import React from 'react';
import { connect } from 'react-redux';
import { getAllArticles } from '../reducers/selectors';
import Feed from './Feed';

import { fetchFeed } from '../actions/feedActions';

class FeedContainer extends React.Component {
  componentDidMount() {
    this.props.fetchFeed();
  }

  render() {
    return (
      <Feed feed={this.props.feed}/>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    feed: getAllArticles(state),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchFeed: () => dispatch(fetchFeed()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedContainer);
