import { ActionTypes } from './types';
import { Event } from 'typescript-fetch-api';

interface SearchRequestNewlyEventAction {
  type: typeof ActionTypes.REQUEST_NEWLY_EVENT;
  isLoading: boolean;
}

const searchNewlyEvent = (): SearchRequestNewlyEventAction => {
  return {
    type: ActionTypes.REQUEST_NEWLY_EVENT,
    isLoading: true
  };
};

interface SearchSuccessNewlyEventAction {
  type: typeof ActionTypes.SUCCESS_NEWLY_EVENT;
  isLoading: boolean;
  events: Array<Event>;
}

const searchSuccessNewlyEvent = (
  events: Array<Event>
): SearchSuccessNewlyEventAction => {
  return {
    type: ActionTypes.SUCCESS_NEWLY_EVENT,
    isLoading: true,
    events
  };
};

interface SearchErrorNewlyEventAction {
  type: typeof ActionTypes.ERROR_NEWLY_EVENT;
  isLoading: boolean;
  error: Error;
}

const searchErrorNewlyEvent = (error: Error): SearchErrorNewlyEventAction => {
  return {
    type: ActionTypes.ERROR_NEWLY_EVENT,
    isLoading: false,
    error
  };
};

export default {
  searchNewlyEvent,
  searchSuccessNewlyEvent,
  searchErrorNewlyEvent
};

export type EventAction =
  | SearchRequestNewlyEventAction
  | SearchSuccessNewlyEventAction
  | SearchErrorNewlyEventAction;
