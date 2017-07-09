import initialState from '../initialState';

import {
  SET_CURRENT_RESIDENCE,
  CLEAR_CURRENT_RESIDENCE,
} from '../actions/types';

export default (state = initialState.currentResidence, action) => {
  switch (action.type) {
    case SET_CURRENT_RESIDENCE: {
      return { ...action.payload };
    }
    case CLEAR_CURRENT_RESIDENCE: {
      return {};
    }
    default:
      return state;
  }
};
