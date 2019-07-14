import firebase from '../../../firebase/firebase';
import Redux from 'redux';
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
};

export default { loginGoogle };
