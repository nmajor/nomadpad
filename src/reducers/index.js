import { combineReducers } from 'redux';
import WelcomedReducer from './WelcomedReducer';

export default combineReducers({
  welcomed: WelcomedReducer,
});
