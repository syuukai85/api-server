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

/**
 * 通知の表示/非表示を扱うreducer
 *
 * @param {AppState} state state情報
 * @param {NotificationAction} action action情報
 */
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
