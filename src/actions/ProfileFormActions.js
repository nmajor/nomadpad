import {
  SET_PROFILE_FORM_VALUE,
  CLEAR_PROFILE_FORM,
} from './types';

export const setProfileFormValue = (field, val) => {
  return {
    type: SET_PROFILE_FORM_VALUE,
    payload: { field, val },
  };
};

export const clearProfileForm = () => {
  return {
    type: CLEAR_PROFILE_FORM,
  };
};
