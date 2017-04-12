import { connect } from 'react-redux';
import FeedSection from './FeedSection';

const mapStateToProps = (state, ownProps) => {
  return {
    feeds: state.feeds,
  };
};

// const mapDispatchToProps = (dispatch, ownProps) => ({
//   fetchChannel: (userId, channelId) => dispatch(fetchChannel(userId, channelId)),
//   setChannel: (channel) => dispatch(setChannel(channel))
// });

export default connect(
  mapStateToProps,
  null
)(FeedSection);
