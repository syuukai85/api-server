import { combineReducers } from 'redux';
import { NotificationAction } from './actions';
import { ActionTypes, VariantIconKeys } from './types';

interface AppState {
  open: boolean;
  message?: string;
  variant?: VariantIconKeys;
}

const infoVariant: VariantIconKeys = 'info';

const initialState = {
  open: false,
  messsage: '',
  variant: infoVariant,
};

const notification = (state: AppState = initialState, action: NotificationAction): AppState => {
  switch (action.type) {
    case ActionTypes.SHOW_NOTIFICATION: {
      return Object.assign({}, state, {
        open: action.open,
        variant: action.variant,
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
