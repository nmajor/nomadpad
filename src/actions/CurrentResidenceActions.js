import {
  SET_CURRENT_RESIDENCE,
  CLEAR_CURRENT_RESIDENCE,
} from './types';

export const setCurrentResidence = (res) => {
  return {
    type: SET_CURRENT_RESIDENCE,
    payload: res,
  };
};

export const clearCurrentResidence = () => {
  return {
    type: CLEAR_CURRENT_RESIDENCE,
  };
};
