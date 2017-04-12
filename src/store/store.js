import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import RootReducer from '../reducers/RootReducer';

const middlewares = [thunk];

if (process.env.NODE_ENV !== 'production') {
  middlewares.push(logger);
}

const configureStore = (initialState = {}) => {
  return createStore(
    RootReducer,
    initialState,
    applyMiddleware(...middlewares)
  );
};

export default configureStore;
