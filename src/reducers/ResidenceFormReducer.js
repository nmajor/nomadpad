import initialState from '../initialState';

import {
  SET_RESIDENCE_FORM_VALUE,
  CLEAR_RESIDENCE_FORM,
} from '../actions/types';

export default (state = initialState.residenceForm, action) => {
  switch (action.type) {
    case SET_RESIDENCE_FORM_VALUE: {
      const newState = { ...state };
      newState[action.payload.field] = action.payload.val;

      return newState;
    }
    case CLEAR_RESIDENCE_FORM: {
      return {};
    }
    default:
      return state;
  }
};
