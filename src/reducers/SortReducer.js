import { RECEIVE_SORT } from '../actions/sortActions.js';

const initialState = {
  column: '',
  order: '',
};

const SortReducer = (state = initialState, action) => {
  Object.freeze();

  switch (action.type) {
    case RECEIVE_SORT:
      return Object.assign({}, state, { column: action.column,
                                        order: action.order, });

    default:
      return state;
  }
};

export default SortReducer;
