import { ActionTypes } from './types';
import firebase from 'firebase';
import { Action } from 'redux';

interface StartLoadingAction {
  type: typeof ActionTypes.START_LOADING;
  isLoading: boolean;
}

const startLoading = (): StartLoadingAction => {
  return {
    type: ActionTypes.START_LOADING,
    isLoading: true,
  };
};

interface EndLoadingAction {
  type: typeof ActionTypes.END_LOADING;
  isLoading: boolean;
}

const endLoading = (): EndLoadingAction => {
  return {
    type: ActionTypes.END_LOADING,
    isLoading: false,
  };
};

interface IsLoginAction extends Action {
  type: typeof ActionTypes.SAVE_LOGIN_USER;
  payload: {
    uid: string;
    displayName: string | null;
    email: string | null;
  };
}

const isLogin = (user: firebase.User): IsLoginAction => {
  return {
    type: ActionTypes.SAVE_LOGIN_USER,
    payload: {
      displayName: user.displayName,
      email: user.email,
      uid: user.uid,
    },
  };
};

interface LogoutAction extends Action {
  type: typeof ActionTypes.LOGOUT;
}

const logout = (): LogoutAction => {
  return {
    type: ActionTypes.LOGOUT,
  };
};

export default { startLoading, endLoading, isLogin, logout };
export type AuthAction = IsLoginAction | LogoutAction | StartLoadingAction | EndLoadingAction;
