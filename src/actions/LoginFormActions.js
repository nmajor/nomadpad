import {
  SET_LOGIN_FORM_VALUE,
} from './types';

export const setLoginFormValue = (field, val) => {
  return {
    type: SET_LOGIN_FORM_VALUE,
    payload: { field, val },
  };
};
