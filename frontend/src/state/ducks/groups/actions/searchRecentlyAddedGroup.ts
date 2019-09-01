import { ActionTypes } from '../types';
import { Group } from 'typescript-fetch-api';

const searchRecentlyAddedGroup = () => {
  return {
    type: ActionTypes.REQUEST_NEWLY_GROUP,
    isLoading: true,
  };
};

const searchSuccessRecentlyAddedGroup = (groups: Array<Group>) => {
  return {
    type: ActionTypes.SUCCESS_NEWLY_GROUP,
    isLoading: true,
    groups,
  };
};

const searchErrorRecentlyAddedGroup = (error: Error) => {
  return {
    type: ActionTypes.ERROR_NEWLY_GROUP,
    isLoading: false,
    error,
  };
};

export default {
  searchRecentlyAddedGroup,
  searchSuccessRecentlyAddedGroup,
  searchErrorRecentlyAddedGroup,
};

export type SearchRecentlyAddedGroupAction = ReturnType<typeof searchRecentlyAddedGroup> &
  ReturnType<typeof searchSuccessRecentlyAddedGroup> &
  ReturnType<typeof searchErrorRecentlyAddedGroup>;
