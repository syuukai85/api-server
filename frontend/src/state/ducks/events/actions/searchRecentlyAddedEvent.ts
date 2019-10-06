import { ActionTypes } from '../types';
import { Event } from 'typescript-fetch-api';

const searchRecentlyAddedEvent = () => {
  return {
    type: ActionTypes.REQUEST_NEWLY_EVENT,
    isLoading: true
  };
};

const searchSuccessRecentlyAddedEvent = (events: Array<Event>) => {
  return {
    type: ActionTypes.SUCCESS_NEWLY_EVENT,
    isLoading: false,
    events
  };
};

const searchErrorRecentlyAddedEvent = (error: Error) => {
  return {
    type: ActionTypes.ERROR_NEWLY_EVENT,
    isLoading: false,
    error
  };
};

export type RecentlyAddedEventAction = ReturnType<
  typeof searchErrorRecentlyAddedEvent
> &
  ReturnType<typeof searchRecentlyAddedEvent> &
  ReturnType<typeof searchSuccessRecentlyAddedEvent>;

export default {
  searchRecentlyAddedEvent,
  searchSuccessRecentlyAddedEvent,
  searchErrorRecentlyAddedEvent
};
