import { combineReducers } from 'redux';
import { Group } from 'typescript-fetch-api';
import { SearchRecentlyAddedGroupAction } from './actions';
import { ActionTypes } from './types';

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

const groupsReducer = combineReducers({ recentlyAddedGroup });
export default groupsReducer;
