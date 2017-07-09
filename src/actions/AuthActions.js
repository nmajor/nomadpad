// import { AccessToken, LoginManager } from 'react-native-fbsdk';
import firebase from 'react-native-firebase';

import { setUser } from './UserActions';
import { setLoginFormValue } from './LoginFormActions';

export const loginUser = (email, password) => {
  // cb = cb || function(){}; // eslint-disable-line

  return (dispatch) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((user) => {
      console.log('user logged in', user);
      dispatch(setUser(user));
    })
    .catch((err) => {
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((user) => {
        console.log('user created', user);
        dispatch(setUser(user));
      })
      .catch((error) => {
        dispatch(setLoginFormValue('errors', 'An error happened.'));
        console.error('register error', error);
      });

      console.error('login error', err);
    });
  };
};

// firebase.auth().signInWithEmailAndPassword(email, password)
// .then(user => loginUserSuccess(dispatch, user))
// .catch((error) => {
//   console.log(error);
//
//   firebase.auth().createUserWithEmailAndPassword(email, password)
//     .then(user => loginUserSuccess(dispatch, user))
//     .catch(() => loginUserFail(dispatch));
// });


export const registerUser = () => {
  return (dispatch) => {
    firebase.auth().createUserWithEmailAndPassword('foo@bar.com', '123456')
    .then((user) => {
      console.log('user created', user);
      dispatch(setUser(user));
    })
    .catch((err) => {
      console.error('An error occurred', err);
    });
  };
};

// export const loginUserFacebook = () => {
//   return (dispatch) => {
//     LoginManager.logInWithReadPermissions(['public_profile', 'email'])
//     .then((result) => {
//       if (result.isCancelled) {
//         return Promise.resolve('cancelled');
//       }
//       console.log(`Login success with permissions: ${result.grantedPermissions.toString()}`);
//       // get the access token
//       return AccessToken.getCurrentAccessToken();
//     })
//     .then(data => {
//       // create a new firebase credential with the token
//       const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken);
//
//       // login with credential
//       return firebase.auth().signInWithCredential(credential);
//     })
//     .then((currentUser) => {
//       if (currentUser === 'cancelled') {
//         console.log('Login cancelled');
//       } else {
//         // now signed in
//         dispatch(setUser());
//         console.warn(JSON.stringify(currentUser.toJSON()));
//       }
//     })
//     .catch((error) => {
//       console.log(`Login fail with error: ${error}`);
//     });
//   };
// };
