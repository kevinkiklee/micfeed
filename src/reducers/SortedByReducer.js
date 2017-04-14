import { SET_SORTED_BY } from '../actions/sortedByActions.js';

const initialState = '';

const SortedByReducer = (state = initialState, action) => {
  Object.freeze();

  switch (action.type) {
    case SET_SORTED_BY:
      return action.sortedBy;

    default:
      return state;
  }
};

export default SortedByReducer;
