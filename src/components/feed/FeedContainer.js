import React from 'react';
import { connect } from 'react-redux';

import { getAllArticles } from '../../reducers/selectors';
import { fetchFeed } from '../../actions/feedActions';

import Feed from './Feed';

class FeedContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      feedLoaded: false
    };
  }

  componentDidMount() {
    this.props.fetchFeed()
              .then(() => this.setState({ feedLoaded: true }));
  }

  render() {
    let content = 'Loading...';

    if (this.state.feedLoaded) {
      content = <Feed feed={this.props.feed}/>;
    }

    return (
      <div className='FeedContainer'>
        { content }
      </div>
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
