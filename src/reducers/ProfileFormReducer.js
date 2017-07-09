import initialState from '../initialState';

import {
  SET_PROFILE_FORM_VALUE,
  CLEAR_PROFILE_FORM,
} from '../actions/types';

export default (state = initialState.profileForm, action) => {
  switch (action.type) {
    case SET_PROFILE_FORM_VALUE: {
      const newState = { ...state };
      newState[action.payload.field] = action.payload.val;

      return newState;
    }
    case CLEAR_PROFILE_FORM: {
      return {};
    }
    default:
      return state;
  }
};
