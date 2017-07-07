import initialState from '../initialState';

import {
  SET_PAGE_VIEWED,
} from '../actions/types';

export default (state = initialState.welcomed, action) => {
  switch (action.type) {
    case SET_PAGE_VIEWED:
      return action.payload;
    default:
      return state;
  }
};
