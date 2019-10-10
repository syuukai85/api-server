import { combineReducers } from 'redux';
import { Group } from 'typescript-fetch-api';
import {
  SearchGroupAction,
  SearchGroupEventsAction,
  SearchRecentlyAddedGroupAction
} from './actions';
import { ActionTypes } from './types';

interface GroupState {
  group: Group;
  isLoading: boolean;
}

/**
 * グループのstateをreduceする
 *
 * @param {GroupState} state state情報
 * @param {SearchGroupAction} action action情報
 *
 * @returns {GroupState} reduce後のstate情報
 */
const group = (
  state: GroupState = { group: {name: '', description: ''}, isLoading: true },
  action: SearchGroupAction
): GroupState => {
  switch (action.type) {
    case ActionTypes.REQUEST_GROUP: {
      return Object.assign({}, state, {
        isLoading: action.isLoading
      });
    }
    case ActionTypes.SUCCESS_GROUP: {
      return Object.assign({}, state, {
        group: action.group,
        isLoading: action.isLoading
      });
    }
    case ActionTypes.ERROR_GROUP: {
      return Object.assign({}, state, {
        isLoading: action.isLoading,
        error: action.error
      });
    }
    default: {
      return state;
    }
  }
};

interface GroupEventsState {
  events: Array<Event>;
  isLoading: boolean;
}

/**
 * グループ内のイベントのstateをreduceする
 *
 * @param {GroupEventsState} state state情報
 * @param {SearchGroupEventsAction} action action情報
 *
 * @returns {GroupEventsState} reduce後のstate情報
 */
const groupEvents = (
  state: GroupEventsState = { events: [], isLoading: true },
  action: SearchGroupEventsAction
): GroupEventsState => {
  switch (action.type) {
    case ActionTypes.REQUEST_GROUP_EVENTS: {
      return Object.assign({}, state, {
        isLoading: action.isLoading
      });
    }
    case ActionTypes.SUCCESS_GROUP_EVENTS: {
      return Object.assign({}, state, {
        events: action.events,
        isLoading: action.isLoading
      });
    }
    case ActionTypes.ERROR_GROUP_EVENTS: {
      return Object.assign({}, state, {
        isLoading: action.isLoading,
        error: action.error
      });
    }
    default: {
      return state;
    }
  }
};

interface RecentlyAddedGroupState {
  groups: Array<Group>;
  isLoading: boolean;
}

/**
 * 最近追加されたグループのstateをreduceする
 *
 * @param {RecentlyAddedGroupState} state state情報
 * @param {SearchRecentlyAddedGroupAction} action action情報
 *
 * @returns {RecentlyAddedGroupState} reduce後のstate情報
 */
const recentlyAddedGroup = (
  state: RecentlyAddedGroupState = { groups: [], isLoading: true },
  action: SearchRecentlyAddedGroupAction
): RecentlyAddedGroupState => {
  switch (action.type) {
    case ActionTypes.REQUEST_NEWLY_GROUP: {
      return Object.assign({}, state, {
        isLoading: action.isLoading
      });
    }
    case ActionTypes.SUCCESS_NEWLY_GROUP: {
      return Object.assign({}, state, {
        isLoading: action.isLoading,
        groups: action.groups
      });
    }
    case ActionTypes.ERROR_NEWLY_GROUP: {
      return Object.assign({}, state, {
        isLoading: action.isLoading,
        error: action.error
      });
    }
    default: {
      return state;
    }
  }
};

const groupsReducer = combineReducers({
  group,
  groupEvents,
  recentlyAddedGroup
});
export default groupsReducer;
