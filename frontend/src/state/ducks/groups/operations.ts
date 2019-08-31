import Redux from 'redux';
import actions from './actions';

/**
 * グループの検索
 *
 * @param {Redux.Dispatch} dispatch reduxのdispatch
 * @param {string} groupId グループid
 */
const searchGroup = (dispatch: Redux.Dispatch, groupId: string) => {
  dispatch(actions.searchGroup.searchGroup(groupId));
};

/**
 * グループに紐付くイベント群の取得
 *
 * @param {Redux.Dispatch} dispatch reduxのdispatch
 * @param {string} groupId グループid
 */
const searchGroupEvents = (dispatch: Redux.Dispatch, groupId: string) => {
  dispatch(actions.searchGroupEvents.searchGroupEvents(groupId));
};

/**
 * 最近追加されたグループの取得
 *
 * @param {Redux.Dispatch} dispatch reduxのdispatch
 */
const searchRecentlyAddedGroup = (dispatch: Redux.Dispatch) => {
  dispatch(actions.searchRecentlyAddedGroup.searchRecentlyAddedGroup());
};

export default { searchGroup, searchGroupEvents, searchRecentlyAddedGroup };
