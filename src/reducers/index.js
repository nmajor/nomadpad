import { combineReducers } from 'redux';
import PagesViewedReducer from './PagesViewedReducer';
import UserReducer from './UserReducer';
import LoginFormReducer from './LoginFormReducer';
import ProfileFormReducer from './ProfileFormReducer';

export default combineReducers({
  pagesViewed: PagesViewedReducer,
  loginForm: LoginFormReducer,
  profileForm: ProfileFormReducer,
  user: UserReducer,
});
