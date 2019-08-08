import { ActionTypes } from '../types';
import { Event } from 'typescript-fetch-api';
import { default as searchEvent, SearchEventAction } from './searchEvent';
export type SearchEventAction = SearchEventAction;

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
  searchRecentlyAddedEvent,
  searchSuccessRecentlyAddedEvent,
  searchErrorRecentlyAddedEvent,
  searchRecentlyFinishedEvent,
  searchSuccessRecentlyFinishedEvent,
  searchErrorRecentlyFinishedEvent
};
