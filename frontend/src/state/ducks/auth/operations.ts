import firebase from '../../../firebase/firebase';

const loginGoogle = async () => {
  let provider = new firebase.auth.GoogleAuthProvider();
  return await firebase
    .auth()
    .signInWithPopup(provider)
    .catch(error => {
      // TODO: sign in error handling
      throw new Error(error.message);
    });
};

export default { loginGoogle };
