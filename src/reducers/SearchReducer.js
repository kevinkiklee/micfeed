import { RECEIVE_SEARCH_STRING } from '../actions/searchActions.js';

const initialState = {};

const SearchReducer = (state = initialState, action) => {
  Object.freeze();

  switch (action.type) {
    case RECEIVE_SEARCH_STRING:
      return Object.assign({}, state, { string: action.string });

    default:
      return state;
  }
};

export default SearchReducer;
