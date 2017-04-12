// import { RECEIVE_MESSAGE } from '../actions/message_action';

// import merge from 'lodash/merge';

const initialState = { test: 'abc' };

const FeedReducer = (state = initialState, action) => {
  Object.freeze();

  switch (action.type) {
    default:
      return state;
  }
};

export default FeedReducer;
