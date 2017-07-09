import initialState from '../initialState';

import {
  SET_SEARCH_FORM_VALUE,
  CLEAR_SEARCH_FORM,
} from '../actions/types';

export default (state = initialState.searchForm, action) => {
  switch (action.type) {
    case SET_SEARCH_FORM_VALUE: {
      const newState = { ...state };
      newState[action.payload.field] = action.payload.val;

      return newState;
    }
    case CLEAR_SEARCH_FORM: {
      return {};
    }
    default:
      return state;
  }
};
