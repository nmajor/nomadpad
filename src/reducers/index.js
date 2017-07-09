import { combineReducers } from 'redux';
import PagesViewedReducer from './PagesViewedReducer';
import UserReducer from './UserReducer';
import LoginFormReducer from './LoginFormReducer';
import ProfileFormReducer from './ProfileFormReducer';
import ResidenceFormReducer from './ResidenceFormReducer';
import SearchFormReducer from './SearchFormReducer';

export default combineReducers({
  pagesViewed: PagesViewedReducer,
  user: UserReducer,
  loginForm: LoginFormReducer,
  profileForm: ProfileFormReducer,
  residenceForm: ResidenceFormReducer,
  searchForm: SearchFormReducer,
});
