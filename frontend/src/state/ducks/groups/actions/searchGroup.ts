import { ActionTypes } from '../types';
import { Group } from 'typescript-fetch-api';

const searchGroup = (groupId: string) => {
  return {
    type: ActionTypes.REQUEST_GROUP,
    isLoading: true,
    groupId
  };
};

const searchSuccessGroup = (group: Group) => {
  return {
    type: ActionTypes.SUCCESS_GROUP,
    isLoading: false,
    group
  };
};

const searchErrorGroup = (error: Error) => {
  return {
    type: ActionTypes.ERROR_GROUP,
    isLoading: false,
    error
  };
};

export type SearchGroupAction = ReturnType<typeof searchGroup> &
  ReturnType<typeof searchSuccessGroup> &
  ReturnType<typeof searchErrorGroup>;

export default {
  searchGroup,
  searchSuccessGroup,
  searchErrorGroup
};
