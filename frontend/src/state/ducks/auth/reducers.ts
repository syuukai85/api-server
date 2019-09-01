import { combineReducers } from 'redux';
import { AuthAction } from './actions';
import { ActionTypes } from './types';

interface AppState {
  uid: string | null;
  displayName: string | null;
  email: string | null;
  isLoading: boolean;
}

const initialState = {
  uid: null,
  displayName: null,
  email: null,
  isLoading: true,
};

const auth = (state: AppState = initialState, action: AuthAction): AppState => {
  switch (action.type) {
    case ActionTypes.START_LOADING: {
      return Object.assign({}, state, {
        isLoading: action.isLoading,
      });
    }
    case ActionTypes.END_LOADING: {
      return Object.assign({}, state, {
        isLoading: action.isLoading,
      });
    }
    case ActionTypes.SAVE_LOGIN_USER: {
      return Object.assign({}, state, {
        uid: action.payload.uid,
        displayName: action.payload.displayName,
        email: action.payload.email,
      });
    }
    case ActionTypes.LOGOUT: {
      return Object.assign({}, state, {
        uid: null,
        displayName: null,
        email: null,
      });
    }
    default: {
      return state;
    }
  }
};

const authReducer = combineReducers({
  auth,
});

export default authReducer;
