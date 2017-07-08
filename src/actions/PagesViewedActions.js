import {
  SET_PAGE_VIEWED,
} from './types';

export const setPageViewed = (page, value) => {
  return {
    type: SET_PAGE_VIEWED,
    payload: { page, value },
  };
};
