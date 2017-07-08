import { combineReducers } from 'redux';
import PagesViewedReducer from './PagesViewedReducer';

export default combineReducers({
  welcomed: PagesViewedReducer,
});
