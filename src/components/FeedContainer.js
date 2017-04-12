import React from 'react';
import { connect } from 'react-redux';
import FeedSection from './FeedSection';

import { fetchFeed } from '../actions/feedActions';

class FeedContainer extends React.Component {
  componentDidMount() {
    this.props.fetchFeed();
  }

  render() {
    return (
      <FeedSection feed={this.props.feed}/>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    feed: state.feed,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchFeed: () => dispatch(fetchFeed()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedContainer);
