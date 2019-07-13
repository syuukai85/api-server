import firebase from '../../../firebase/firebase';

const loginGoogle = () => {
  let provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
};

export default { loginGoogle };
