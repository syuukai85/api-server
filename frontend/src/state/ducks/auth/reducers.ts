import { combineReducers } from 'redux';
import { AuthAction } from './actions';
import { ActionTypes } from './types';

interface AppState {
  uid: string | null;
  displayName: string | null;
  email: string | null;
}

const initialState = {
  uid: null,
  displayName: null,
  email: null
};

const auth = (state: AppState = initialState, action: AuthAction): AppState => {
  switch (action.type) {
    case ActionTypes.IS_LOGIN: {
      return Object.assign({}, state, {
        uid: action.payload.uid,
        displayName: action.payload.displayName,
        email: action.payload.email
      });
    }
    case ActionTypes.LOGOUT: {
      return Object.assign({}, state, {
        uid: null,
        displayName: null,
        email: null
      });
    }
    default: {
      return state;
    }
  }
};

const authReducer = combineReducers({
  auth
});

export default authReducer;
