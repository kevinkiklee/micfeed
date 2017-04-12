import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import RootReducer from '../reducers/RootReducer';

// const middlewares = [thunk];
//
// if (process.env.NODE_ENV !== 'production') {
//   const { logger } = require(`redux-logger`);
//   middlewares.push(logger);
// }

const logger = createLogger();

const configureStore = (initialState = {}) => {
  return createStore(
    RootReducer,
    initialState,
    applyMiddleware(thunk, logger)
  );
};

export default configureStore;
