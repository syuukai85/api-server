import { ActionTypes } from './types';
import { Event } from 'typescript-fetch-api';

export interface SearchRequestEventAction {
  type: typeof ActionTypes.REQUEST_EVENT;
  eventId: string;
  isLoading: boolean;
}

const searchEvent = (eventId: string): SearchRequestEventAction => {
  return {
    type: ActionTypes.REQUEST_EVENT,
    isLoading: true,
    eventId
  };
};

interface SearchSuccessEventAction {
  type: typeof ActionTypes.SUCCESS_EVENT;
  isLoading: boolean;
  event: Event;
}

const searchSuccessEvent = (event: Event): SearchSuccessEventAction => {
  return {
    type: ActionTypes.SUCCESS_EVENT,
    isLoading: false,
    event
  };
};

interface SearchErrorEventAction {
  type: typeof ActionTypes.ERROR_EVENT;
  isLoading: boolean;
  error: Error;
}

const searchErrorEvent = (error: Error): SearchErrorEventAction => {
  return {
    type: ActionTypes.ERROR_EVENT,
    isLoading: false,
    error
  };
};

export type SearchEventAction =
  | SearchRequestEventAction
  | SearchSuccessEventAction
  | SearchErrorEventAction;

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
    isLoading: false,
    events
  };
};

interface SearchErrorRecentlyAddedEventAction {
  type: typeof ActionTypes.ERROR_NEWLY_EVENT;
  isLoading: boolean;
  error: Error;
}

const searchErrorRecentlyAddedEvent = (
  error: Error
): SearchErrorRecentlyAddedEventAction => {
  return {
    type: ActionTypes.ERROR_NEWLY_EVENT,
    isLoading: false,
    error
  };
};

export type RecentlyAddedEventAction =
  | SearchRequestRecentlyAddedEventAction
  | SearchSuccessRecentlyAddedEventAction
  | SearchErrorRecentlyAddedEventAction;

interface SearchRequestRecentlyFinishedEventAction {
  type: typeof ActionTypes.REQUEST_FINISHED_EVENT;
  isLoading: boolean;
}

const searchRecentlyFinishedEvent = (): SearchRequestRecentlyFinishedEventAction => {
  return {
    type: ActionTypes.REQUEST_FINISHED_EVENT,
    isLoading: true
  };
};

interface SearchSuccessRecentlyFinishedEventAction {
  type: typeof ActionTypes.SUCCESS_FINISHED_EVENT;
  isLoading: boolean;
  events: Array<Event>;
}

const searchSuccessRecentlyFinishedEvent = (
  events: Array<Event>
): SearchSuccessRecentlyFinishedEventAction => {
  return {
    type: ActionTypes.SUCCESS_FINISHED_EVENT,
    isLoading: false,
    events
  };
};

interface SearchErrorRecentlyFinishedEventAction {
  type: typeof ActionTypes.ERROR_FINISHED_EVENT;
  isLoading: boolean;
  error: Error;
}

const searchErrorRecentlyFinishedEvent = (
  error: Error
): SearchErrorRecentlyFinishedEventAction => {
  return {
    type: ActionTypes.ERROR_FINISHED_EVENT,
    isLoading: false,
    error
  };
};

export type RecentlyFinishedEventAction =
  | SearchRequestRecentlyFinishedEventAction
  | SearchSuccessRecentlyFinishedEventAction
  | SearchErrorRecentlyFinishedEventAction;

export default {
  searchEvent,
  searchSuccessEvent,
  searchErrorEvent,
  searchRecentlyAddedEvent,
  searchSuccessRecentlyAddedEvent,
  searchErrorRecentlyAddedEvent,
  searchRecentlyFinishedEvent,
  searchSuccessRecentlyFinishedEvent,
  searchErrorRecentlyFinishedEvent
};
