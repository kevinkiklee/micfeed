import * as fetchUtil from '../util/fetchUtil';

export const RECEIVE_FEED = 'RECEIVE_FEED';

export const receiveFeed = (feed) => ({
  type: RECEIVE_FEED,
  feed
});

export const fetchFeed = (url) => dispatch => {
  return fetchUtil.fetchJSON(url).then(
    (feed) => dispatch(receiveFeed(feed))
  );
};
