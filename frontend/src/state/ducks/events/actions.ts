import { ActionTypes } from './types';
import { Event } from 'typescript-fetch-api';

interface SearchRequestRecentlyAddedEventAction {
  type: typeof ActionTypes.REQUEST_NEWLY_EVENT;
  isLoading: boolean;
}

const searchRecentlyAddedEvent = (): SearchRequestRecentlyAddedEventAction => {
  return {
    type: ActionTypes.REQUEST_NEWLY_EVENT,
    isLoading: true
  };
};

interface SearchSuccessRecentlyAddedEventAction {
  type: typeof ActionTypes.SUCCESS_NEWLY_EVENT;
  isLoading: boolean;
  events: Array<Event>;
}

const searchSuccessRecentlyAddedEvent = (
  events: Array<Event>
): SearchSuccessRecentlyAddedEventAction => {
  return {
    type: ActionTypes.SUCCESS_NEWLY_EVENT,
    isLoading: true,
    events
  };
};

interface SearchErrorRecentlyAddedEventAction {
  type: typeof ActionTypes.ERROR_NEWLY_EVENT;
  isLoading: boolean;
  error: Error;
}

const searchErrorRecentlyAddedEvent = (error: Error): SearchErrorRecentlyAddedEventAction => {
  return {
    type: ActionTypes.ERROR_NEWLY_EVENT,
    isLoading: false,
    error
  };
};

export default {
  searchRecentlyAddedEvent,
  searchSuccessRecentlyAddedEvent,
  searchErrorRecentlyAddedEvent
};

export type EventAction =
  | SearchRequestRecentlyAddedEventAction
  | SearchSuccessRecentlyAddedEventAction
  | SearchErrorRecentlyAddedEventAction;
