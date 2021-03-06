import initialState from '../initialState';

import {
  SET_LOGIN_FORM_VALUE,
  CLEAR_LOGIN_FORM,
} from '../actions/types';

export default (state = initialState.loginForm, action) => {
  switch (action.type) {
    case SET_LOGIN_FORM_VALUE: {
      const newState = { ...state };
      newState[action.payload.field] = action.payload.val;

      return newState;
    }
    case CLEAR_LOGIN_FORM: {
      return {};
    }
    default:
      return state;
  }
};
