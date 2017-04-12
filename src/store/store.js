import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/rootReducer';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

const logger = createLogger();

const configureStore = (initialState = {}) => {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk, logger)
  );
};
