import { combineReducers } from 'redux';
import FeedReducer from './FeedReducer';

const RootReducer = combineReducers({
  feeds: FeedReducer
});

export default RootReducer;
