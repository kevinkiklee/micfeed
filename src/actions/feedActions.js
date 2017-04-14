import * as FeedUtil from '../util/feedUtil';

export const RECEIVE_FEED = 'RECEIVE_FEED';

export const receiveFeed = (feed) => ({
  type: RECEIVE_FEED,
  feed
});

export const fetchFeed = (url) => dispatch => {
  return FeedUtil.fetchFeed(url).then(
    (feed) => dispatch(receiveFeed(feed))
  );
};
