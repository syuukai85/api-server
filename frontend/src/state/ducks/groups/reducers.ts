import { combineReducers } from 'redux';
import { Group } from 'typescript-fetch-api';
import { SearchGroupAction, SearchRecentlyAddedGroupAction } from './actions';
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

const groupsReducer = combineReducers({ group, recentlyAddedGroup });
export default groupsReducer;
