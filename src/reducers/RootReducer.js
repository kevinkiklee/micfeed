import { combineReducers } from 'redux';

import FeedDataReducer from './FeedDataReducer';
import FeedReducer from './FeedReducer';
import SortReducer from './SortReducer';

const RootReducer = combineReducers({
  feedData: FeedDataReducer,
  feed: FeedReducer,
  sort: SortReducer,
});

export default RootReducer;
