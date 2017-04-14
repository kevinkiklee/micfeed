import { combineReducers } from 'redux';
import FeedReducer from './FeedReducer';

const RootReducer = combineReducers({
  feed: FeedReducer,
});

export default RootReducer;
