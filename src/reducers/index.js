import { combineReducers } from 'redux';
import PagesViewedReducer from './PagesViewedReducer';
import LoginFormReducer from './LoginFormReducer';

export default combineReducers({
  pagesViewed: PagesViewedReducer,
  loginForm: LoginFormReducer,
});
