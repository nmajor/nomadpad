import {
  SET_RESIDENCE_FORM_VALUE,
  CLEAR_RESIDENCE_FORM,
} from './types';

export const setResidenceFormValue = (field, val) => {
  return {
    type: SET_RESIDENCE_FORM_VALUE,
    payload: { field, val },
  };
};

export const clearResidenceForm = () => {
  return {
    type: CLEAR_RESIDENCE_FORM,
  };
};
