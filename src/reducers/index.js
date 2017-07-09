import { combineReducers } from 'redux';
import PagesViewedReducer from './PagesViewedReducer';
import UserReducer from './UserReducer';
import LoginFormReducer from './LoginFormReducer';
import ProfileFormReducer from './ProfileFormReducer';
import ResidenceFormReducer from './ResidenceFormReducer';
import SearchFormReducer from './SearchFormReducer';
import ResidencesReducer from './ResidencesReducer';
import CurrentResidenceReducer from './CurrentResidenceReducer';

export default combineReducers({
  pagesViewed: PagesViewedReducer,
  user: UserReducer,
  currentResidence: CurrentResidenceReducer,
  residences: ResidencesReducer,
  loginForm: LoginFormReducer,
  profileForm: ProfileFormReducer,
  residenceForm: ResidenceFormReducer,
  searchForm: SearchFormReducer,
});
