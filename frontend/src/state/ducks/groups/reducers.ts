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

const group = (
  state: GroupState = { group: {}, isLoading: true },
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
