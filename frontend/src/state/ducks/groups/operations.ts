import Redux from 'redux';
import actions from './actions';

const searchGroup = (dispatch: Redux.Dispatch, groupId: string) => {
  dispatch(actions.searchGroup.searchGroup(groupId));
};

const searchGroupEvents = (dispatch: Redux.Dispatch, groupId: string) => {
  dispatch(actions.searchGroupEvents.searchGroupEvents(groupId));
};

const searchRecentlyAddedGroup = (dispatch: Redux.Dispatch) => {
  dispatch(actions.searchRecentlyAddedGroup.searchRecentlyAddedGroup());
};

export default { searchGroup, searchGroupEvents, searchRecentlyAddedGroup };
