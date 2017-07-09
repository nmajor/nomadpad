import initialState from '../initialState';

import {
  SET_USER,
  SET_USER_ATTRIBUTE,
} from '../actions/types';

export default (state = initialState.user, action) => {
  switch (action.type) {
    case SET_USER: {
      return action.payload;
    }
    case SET_USER_ATTRIBUTE: {
      const newState = { ...state };
      newState[action.attr] = action.payload;
      return newState;
    }
    default:
      return state;
  }
};
