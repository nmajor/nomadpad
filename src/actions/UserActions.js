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

export const updateUser = (data) => {
  const { currentUser } = firebase.auth();
  console.log(`/users/${data.avatar.filename}`);

  console.log('blah test 1', firebase.storage().ref(`users/${currentUser.uid}/avatar/${data.avatar.filename}`));

  return (dispatch) => {
    console.log('blah test 2', firebase.storage().ref(`users/${currentUser.uid}/avatar/${data.avatar.filename}`));

    firebase.storage()
    .ref(`users/${currentUser.uid}/avatar/${data.avatar.filename}`)
    .put(data.avatar.uri)
    .then(uploadedFile => {
      const attributes = {
        displayName: data.displayName,
        avatar: uploadedFile,
      };
      console.log('blah 1');

      firebase.auth().currentUser
      .updateProfile(attributes)
      .then((updatedUser) => {
        console.log('blah 2');
        dispatch(setUser(updatedUser));
      })
      .catch((err) => { console.log('An error happened when updating user', err); });
    })
    .catch((err) => { console.log('An error happened when uploading avatar', err); });
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
