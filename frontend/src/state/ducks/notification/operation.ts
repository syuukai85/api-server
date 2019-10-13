import Redux from 'redux';
import actions from './actions';
import { VariantIconKeys } from './types';

/**
 * 通知の表示
 *
 * @param {Redux.Dispatch} dispatch reduxのdispatch
 * @param {string} message 通知メッセージ
 */
const showNotification = (dispatch: Redux.Dispatch, message: string, variant: VariantIconKeys) => {
  dispatch(actions.showNotification(message, variant));
};

/**
 * 通知を閉じる
 *
 * @param {Redux.Dispatch} dispatch reduxのdispatch
 */
const closeNotification = (dispatch: Redux.Dispatch) => {
  dispatch(actions.closeNotification());
};

export default { showNotification, closeNotification };
