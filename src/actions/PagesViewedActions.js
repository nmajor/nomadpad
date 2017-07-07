import {
  SET_PAGE_VIEWED,
} from './types';

export const setWelcomed = (val) => {
  return {
    type: SET_PAGE_VIEWED,
    payload: val,
  };
};
