import Redux from 'redux';
import { Event } from 'typescript-fetch-api';
import actions from './actions';

/**
 * グループの検索
 *
 * @param {Redux.Dispatch} dispatch reduxのdispatch
 * @param {string} groupId グループid
 */
const searchEvent = (dispatch: Redux.Dispatch, eventId: string) => {
  dispatch(actions.searchEvent.searchEvent(eventId));
};

/**
 * イベントの追加
 *
 * @param {Redux.Dispatch} dispatch reduxのdispatch
 * @param {Event} event イベント
 */
const addEvent = (dispatch: Redux.Dispatch, event: Event) => {
  dispatch(actions.addEvent.addEvent(event));
};

/**
 * 最近追加されたグループの取得
 *
 * @param {Redux.Dispatch} dispatch reduxのdispatch
 */
const searchRecentlyAddedEvent = (dispatch: Redux.Dispatch) => {
  dispatch(actions.searchRecentlyAddedEvent.searchRecentlyAddedEvent());
};

/**
 * 最近終了したグループの取得
 *
 * @param {Redux.Dispatch} dispatch reduxのdispatch
 */
const searchRecentlyFinishedEvent = (dispatch: Redux.Dispatch) => {
  dispatch(actions.searchRecentlyFinishedEvent.searchRecentlyFinishedEvent());
};

export default {
  searchEvent,
  addEvent,
  searchRecentlyAddedEvent,
  searchRecentlyFinishedEvent
};
