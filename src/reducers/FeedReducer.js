import { RECEIVE_FEED } from '../actions/feedActions.js';

const initialState = [];

const FeedReducer = (state = initialState, action) => {
  Object.freeze();

  switch (action.type) {
    case RECEIVE_FEED:
      return [...state].concat(action.feed);

    default:
      return state;
  }
};

export default FeedReducer;
