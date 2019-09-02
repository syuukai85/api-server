import { ActionTypes } from './types';

interface ShowNotificationAction {
  type: typeof ActionTypes.SHOW_NOTIFICATION;
  open: boolean;
  message: string;
}

const showNotification = (message: string): ShowNotificationAction => {
  return {
    type: ActionTypes.SHOW_NOTIFICATION,
    open: true,
    message: message,
  };
};

interface CloseNotificationAction {
  type: typeof ActionTypes.CLOSE_NOTIFICATION;
  open: boolean;
}

const closeNotification = (): CloseNotificationAction => {
  return {
    type: ActionTypes.CLOSE_NOTIFICATION,
    open: false,
  };
};

export default { showNotification, closeNotification };
export type NotificationAction = ShowNotificationAction | CloseNotificationAction;
