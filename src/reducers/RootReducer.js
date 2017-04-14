import { combineReducers } from 'redux';
import FeedReducer from './FeedReducer';
import SortedByReducer from './SortedByReducer';

const RootReducer = combineReducers({
  feed: FeedReducer,
  sortedBy: SortedByReducer,
});

export default RootReducer;
