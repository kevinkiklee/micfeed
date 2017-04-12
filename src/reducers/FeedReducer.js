import merge from 'lodash/merge';

import { RECEIVE_FEED } from '../actions/feedActions.js';

const initialState = { test: 'abc' };

const FeedReducer = (state = initialState, action) => {
  Object.freeze();

  switch (action.type) {
    case RECEIVE_FEED:
      debugger
      return merge({}, state, action.feed);

    default:
      return state;
  }
};

export default FeedReducer;
