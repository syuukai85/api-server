import { combineReducers } from 'redux';
import { Event } from 'typescript-fetch-api';
import { EventAction } from './actions';
import { ActionTypes } from './types';

interface NewlyEventState {
  events: Array<Event>;
  isLoading: boolean;
}

const newlyEvent = (
  state: NewlyEventState = { events: [], isLoading: true },
  action: EventAction
): NewlyEventState => {
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

const eventsReducer = combineReducers({ newlyEvent });
export default eventsReducer;
