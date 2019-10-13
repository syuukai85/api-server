import { ActionTypes, VariantIconKeys } from './types';

interface ShowNotificationAction {
  type: typeof ActionTypes.SHOW_NOTIFICATION;
  open: boolean;
  variant: VariantIconKeys;
  message: string;
}

const showNotification = (message: string, variant: VariantIconKeys): ShowNotificationAction => {
  return {
    type: ActionTypes.SHOW_NOTIFICATION,
    open: true,
    message: message,
    variant: variant,
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
