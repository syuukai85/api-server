import { ActionTypes } from '../types';
import { Event } from 'typescript-fetch-api';

const searchEvent = (eventId: string) => {
  return {
    type: ActionTypes.REQUEST_EVENT,
    isLoading: true,
    eventId
  };
};

const searchSuccessEvent = (event: Event) => {
  return {
    type: ActionTypes.SUCCESS_EVENT,
    isLoading: false,
    event
  };
};

const searchErrorEvent = (error: Error) => {
  return {
    type: ActionTypes.ERROR_EVENT,
    isLoading: false,
    error
  };
};

export type SearchEventAction = ReturnType<typeof searchEvent> &
  ReturnType<typeof searchSuccessEvent> &
  ReturnType<typeof searchErrorEvent>;

export default {
  searchEvent,
  searchSuccessEvent,
  searchErrorEvent
};
