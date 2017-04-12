import * as FeedUtil from '../util/feedUtil';

export const RECEIVE_FEED = 'RECEIVE_FEED';

export const receiveFeed = (feed) => ({
  type: RECEIVE_FEED,
  feed
});

export const fetchFeed = () => dispatch => {
  return FeedUtil.fetchFeed().then(
    (feed) => dispatch(receiveFeed(feed))
  );
};
