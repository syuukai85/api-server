import { ActionTypes } from '../types';
import { Event } from 'typescript-fetch-api';

const searchGroupEvents = (groupId: string) => {
  return {
    type: ActionTypes.REQUEST_GROUP_EVENTS,
    isLoading: true,
    groupId,
  };
};

const searchSuccessGroupEvents = (events: Array<Event>) => {
  return {
    type: ActionTypes.SUCCESS_GROUP_EVENTS,
    isLoading: false,
    events,
  };
};

const searchErrorGroupEvents = (error: Error) => {
  return {
    type: ActionTypes.ERROR_GROUP_EVENTS,
    isLoading: false,
    error,
  };
};

export type SearchGroupEventsAction = ReturnType<typeof searchGroupEvents> &
  ReturnType<typeof searchSuccessGroupEvents> &
  ReturnType<typeof searchErrorGroupEvents>;

export default {
  searchGroupEvents,
  searchSuccessGroupEvents,
  searchErrorGroupEvents,
};
