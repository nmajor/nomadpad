import firebase from '../firebase';

import {
  SET_USER,
  SET_USER_ATTRIBUTE,
} from './types';

export const setUser = (user) => {
  return {
    type: SET_USER,
    payload: user,
  };
};

export const setUserAttribute = (attr, val) => {
  return {
    type: SET_USER_ATTRIBUTE,
    payload: { attr, val },
  };
};

export const updateUser = (user) => {
  const attributes = {
    displayName: user.displayName,
    avatar: user.avatar,
  };

  return (dispatch) => {
    firebase.auth().currentUser
    .updateProfile(attributes)
    .then((updatedUser) => {
      dispatch(setUser(updatedUser));
    })
    .catch();
  };
};

export const refreshUser = () => {
  return (dispatch) => {
    firebase.auth().currentUser
    .reload()
    .then((user) => {
      dispatch(setUser(user));
    })
    .catch();
  };
};
