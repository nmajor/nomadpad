import firebase from 'firebase';

import {
  SET_RESIDENCES,
  CLEAR_RESIDENCES,
} from './types';
import { setResidenceFormValue } from './ResidenceFormActions';

export const setResidences = (res) => {
  return {
    type: SET_RESIDENCES,
    payload: res,
  };
};

export const clearResidences = () => {
  return {
    type: CLEAR_RESIDENCES,
  };
};

export const createResidence = (props, cb) => {
  // const { currentUser } = firebase.auth();

  return (dispatch) => {
    // props = { ...props, creator: currentUser };

    firebase.database().ref('/residences')
    .push(props)
    .then(() => {
      cb();
    })
    .catch((err) => {
      console.log('create residence error', err);
      dispatch(setResidenceFormValue('error', 'An error happened'));
    });
  };
};

export const queryResidences = (query) => {
  // const { currentUser } = firebase.auth();

  return (dispatch) => {
    console.log('blah querying', query);
    // props = { ...props, creator: currentUser };

    const ref = firebase.database().ref('residences');
    ref.orderByChild('city').equalTo(query).on('value', snapshot => {
      console.log('blah queried', snapshot.val());
      dispatch(setResidences(snapshot.val()));
    });
  };
};
