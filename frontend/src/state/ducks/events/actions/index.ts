import { ActionTypes } from '../types';
import { Event } from 'typescript-fetch-api';
import { default as searchEvent, SearchEventAction } from './searchEvent';
import {
  default as searchRecentlyAddedEvent,
  RecentlyAddedEventAction
} from './searchRecentlyAddedEvent';
export type SearchEventAction = SearchEventAction;
export type RecentlyAddedEventAction = RecentlyAddedEventAction;

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
  searchRecentlyFinishedEvent,
  searchSuccessRecentlyFinishedEvent,
  searchErrorRecentlyFinishedEvent
};
