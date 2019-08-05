import { ActionTypes } from './types';
import { Group } from 'typescript-fetch-api';

interface SearchRequestRecentlyAddedGroupAction {
  type: typeof ActionTypes.REQUEST_NEWLY_GROUP;
  isLoading: boolean;
}

const searchRecentlyAddedGroup = (): SearchRequestRecentlyAddedGroupAction => {
  return {
    type: ActionTypes.REQUEST_NEWLY_GROUP,
    isLoading: true
  };
};

interface SearchSuccessRecentlyAddedGroupAction {
  type: typeof ActionTypes.SUCCESS_NEWLY_GROUP;
  isLoading: boolean;
  groups: Array<Group>;
}

const searchSuccessRecentlyAddedGroup = (
  groups: Array<Group>
): SearchSuccessRecentlyAddedGroupAction => {
  return {
    type: ActionTypes.SUCCESS_NEWLY_GROUP,
    isLoading: true,
    groups
  };
};

interface SearchErrorRecentlyAddedGroupAction {
  type: typeof ActionTypes.ERROR_NEWLY_GROUP;
  isLoading: boolean;
  error: Error;
}

const searchErrorRecentlyAddedGroup = (
  error: Error
): SearchErrorRecentlyAddedGroupAction => {
  return {
    type: ActionTypes.ERROR_NEWLY_GROUP,
    isLoading: false,
    error
  };
};

export default {
  searchRecentlyAddedGroup,
  searchSuccessRecentlyAddedGroup,
  searchErrorRecentlyAddedGroup
};

export type GroupAction =
  | SearchRequestRecentlyAddedGroupAction
  | SearchSuccessRecentlyAddedGroupAction
  | SearchErrorRecentlyAddedGroupAction;
