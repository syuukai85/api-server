import firebase from '../../../firebase/firebase';
import Redux from 'redux';
import { push } from 'connected-react-router';
import actions from './actions';

const loginGoogle = async (dispatch: Redux.Dispatch) => {
  let provider = new firebase.auth.GoogleAuthProvider();
  const response = await firebase
    .auth()
    .signInWithPopup(provider)
    .catch(error => {
      // TODO: sign in error handling
      throw new Error(error.message);
    });
  if (response.user === null) throw new Error('response user is not found');
  dispatch(actions.isLogin(response.user));
  dispatch(push('/'));
};

const updateLoginState = (dispatch: Redux.Dispatch) => {
  firebase.auth().onAuthStateChanged(user => {
    if (!user) {
      return;
    }
    dispatch(actions.isLogin(user));
    dispatch(push('/'));
  });
};

export default { loginGoogle, updateLoginState };
