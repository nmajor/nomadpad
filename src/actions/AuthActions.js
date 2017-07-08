// import { AccessToken, LoginManager } from 'react-native-fbsdk';
// import firebase from 'react-native-firebase';
//
// import { setUser } from './UserActions';
//
// export const loginUser = () => {
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
