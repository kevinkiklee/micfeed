import { combineReducers } from 'redux';

import FeedReducer from './FeedReducer';
import SortReducer from './SortReducer';

const RootReducer = combineReducers({
  feed: FeedReducer,
  sort: SortReducer,
});

export default RootReducer;
