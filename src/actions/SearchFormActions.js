import {
  SET_SEARCH_FORM_VALUE,
  CLEAR_SEARCH_FORM,
} from './types';

export const setSearchFormValue = (field, val) => {
  return {
    type: SET_SEARCH_FORM_VALUE,
    payload: { field, val },
  };
};

export const clearSearchForm = () => {
  return {
    type: CLEAR_SEARCH_FORM,
  };
};
