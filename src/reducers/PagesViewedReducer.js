import initialState from '../initialState';

import {
  SET_PAGE_VIEWED,
} from '../actions/types';

export default (state = initialState.pagesViewed, action) => {
  switch (action.type) {
    case SET_PAGE_VIEWED: {
      const newState = { ...state };
      newState[action.payload.page] = action.payload.value;
      return newState;
    }
    default:
      return state;
  }
};
