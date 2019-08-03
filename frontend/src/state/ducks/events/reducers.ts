import { combineReducers } from 'redux';
import { Event } from 'typescript-fetch-api';
import {
  RecentlyAddedEventAction,
  RecentlyFinishedEventAction
} from './actions';
import { ActionTypes } from './types';

interface RecentlyAddedEventState {
  events: Array<Event>;
  isLoading: boolean;
}

const recentlyAddedEvent = (
  state: RecentlyAddedEventState = { events: [], isLoading: true },
  action: RecentlyAddedEventAction
): RecentlyAddedEventState => {
  switch (action.type) {
    case ActionTypes.REQUEST_NEWLY_EVENT: {
      return Object.assign({}, state, {
        isLoading: action.isLoading
      });
    }
    case ActionTypes.SUCCESS_NEWLY_EVENT: {
      return Object.assign({}, state, {
        isLoading: action.isLoading,
        events: action.events
      });
    }
    case ActionTypes.ERROR_NEWLY_EVENT: {
      return Object.assign({}, state, {
        isLoading: action.isLoading,
        error: action.error
      });
    }
    default: {
      return state;
    }
  }
};

interface RecentlyFinishedEventState {
  events: Array<Event>;
  isLoading: boolean;
}

const recentlyFinishedEvent = (
  state: RecentlyFinishedEventState = { events: [], isLoading: true },
  action: RecentlyFinishedEventAction
): RecentlyFinishedEventState => {
  switch (action.type) {
    case ActionTypes.REQUEST_FINISHED_EVENT: {
      return Object.assign({}, state, {
        isLoading: action.isLoading
      });
    }
    case ActionTypes.SUCCESS_FINISHED_EVENT: {
      return Object.assign({}, state, {
        isLoading: action.isLoading,
        events: action.events
      });
    }
    case ActionTypes.ERROR_FINISHED_EVENT: {
      return Object.assign({}, state, {
        isLoading: action.isLoading,
        error: action.error
      });
    }
    default: {
      return state;
    }
  }
};

const eventsReducer = combineReducers({
  recentlyAddedEvent,
  recentlyFinishedEvent
});
export default eventsReducer;
