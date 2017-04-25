import { RECEIVE_FEED_DATA } from '../actions/feedDataActions.js';

const initialState = {};

const SortReducer = (state = {initialState}, action) => {
  Object.freeze();

  switch (action.type) {
    case RECEIVE_FEED_DATA:
      return Object.assign({}, state, action.data);

    default:
      return state;
  }
};

export default SortReducer;
