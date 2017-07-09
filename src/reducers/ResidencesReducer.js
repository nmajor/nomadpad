import initialState from '../initialState';

import {
  SET_RESIDENCES,
  CLEAR_RESIDENCES,
} from '../actions/types';

export default (state = initialState.residences, action) => {
  switch (action.type) {
    case SET_RESIDENCES: {
      return { ...action.payload };
    }
    case CLEAR_RESIDENCES: {
      return {};
    }
    default:
      return state;
  }
};
