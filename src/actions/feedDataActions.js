import * as fetchUtil from '../util/fetchUtil';

export const RECEIVE_FEED_DATA = 'RECEIVE_FEED_DATA';

export const receiveFeedData = (data) => ({
  type: RECEIVE_FEED_DATA,
  data
});

export const fetchFeedData = (path) => dispatch => (
  fetchUtil.fetchJSON(path).then(
    (data) => dispatch(receiveFeedData(data)))
);
