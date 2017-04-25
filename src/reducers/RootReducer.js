import { combineReducers } from 'redux';

import FeedDataReducer from './FeedDataReducer';
import FeedReducer from './FeedReducer';
import SortReducer from './SortReducer';
import SearchReducer from './SearchReducer';

const RootReducer = combineReducers({
  feedData: FeedDataReducer,
  feed: FeedReducer,
  sort: SortReducer,
  search: SearchReducer,
});

export default RootReducer;
