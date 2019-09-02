import { combineReducers } from 'redux';
import { NotificationAction } from './actions';
import { ActionTypes } from './types';

interface AppState {
  open: boolean;
  message?: string;
}

const initialState = {
  open: false,
  messsage: '',
};

const notification = (state: AppState = initialState, action: NotificationAction): AppState => {
  switch (action.type) {
    case ActionTypes.SHOW_NOTIFICATION: {
      return Object.assign({}, state, {
        open: action.open,
        message: action.message,
      });
    }
    case ActionTypes.CLOSE_NOTIFICATION: {
      return Object.assign({}, state, {
        open: action.open,
      });
    }
    default: {
      return state;
    }
  }
};

const notificationReducer = combineReducers({
  notification,
});

export default notificationReducer;
