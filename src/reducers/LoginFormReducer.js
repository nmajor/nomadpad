import initialState from '../initialState';

import {
  SET_LOGIN_FORM_VALUE,
} from '../actions/types';

export default (state = initialState.loginForm, action) => {
  switch (action.type) {
    case SET_LOGIN_FORM_VALUE: {
      const newState = { ...state };
      newState[action.field] = action.value;

      return newState;
    }
    default:
      return state;
  }
};
