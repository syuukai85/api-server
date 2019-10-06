import { ActionTypes } from '../types';
import { Event } from 'typescript-fetch-api';

const searchRecentlyFinishedEvent = () => {
  return {
    type: ActionTypes.REQUEST_FINISHED_EVENT,
    isLoading: true
  };
};

const searchSuccessRecentlyFinishedEvent = (events: Array<Event>) => {
  return {
    type: ActionTypes.SUCCESS_FINISHED_EVENT,
    isLoading: false,
    events
  };
};

const searchErrorRecentlyFinishedEvent = (error: Error) => {
  return {
    type: ActionTypes.ERROR_FINISHED_EVENT,
    isLoading: false,
    error
  };
};

export type RecentlyFinishedEventAction = ReturnType<
  typeof searchRecentlyFinishedEvent
> &
  ReturnType<typeof searchSuccessRecentlyFinishedEvent> &
  ReturnType<typeof searchErrorRecentlyFinishedEvent>;

export default {
  searchRecentlyFinishedEvent,
  searchSuccessRecentlyFinishedEvent,
  searchErrorRecentlyFinishedEvent
};
