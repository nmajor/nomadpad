import {
  SET_LOGIN_FORM_VALUE,
  CLEAR_LOGIN_FORM,
} from './types';

export const setLoginFormValue = (field, val) => {
  return {
    type: SET_LOGIN_FORM_VALUE,
    payload: { field, val },
  };
};

export const clearLoginForm = () => {
  return {
    type: CLEAR_LOGIN_FORM,
  };
};
