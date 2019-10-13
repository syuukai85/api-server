import { combineReducers } from 'redux';
import { Event } from 'typescript-fetch-api';
import {
  SearchEventAction,
  AddEventAction,
  RecentlyAddedEventAction,
  RecentlyFinishedEventAction
} from './actions';
import { ActionTypes } from './types';

interface EventState {
  event: Event;
  isLoading: boolean;
}

/**
 * イベントのstateをreduceする
 *
 * @param {EventState} state state情報
 * @param {SearchEventAction} action action情報
 *
 * @returns {EventState} reduce後のstate情報
 */
const event = (
  state: EventState = { 
    event: 
    { title: '', holdStartDate: new Date(), holdEndDate: new Date() },
    isLoading: true 
  },
  action: SearchEventAction
): EventState => {
  switch (action.type) {
    case ActionTypes.REQUEST_EVENT: {
      return Object.assign({}, state, {
        isLoading: action.isLoading
      });
    }
    case ActionTypes.SUCCESS_EVENT: {
      return Object.assign({}, state, {
        isLoading: action.isLoading,
        event: action.event
      });
    }
    case ActionTypes.ERROR_EVENT: {
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

interface AddEventState {
  event: Event;
  isLoading: boolean;
}

/**
 * イベントの追加のstateをreduceする
 *
 * @param {AddEventState} state state情報
 * @param {AddEventAction} action action情報
 *
 * @returns {EventState} reduce後のstate情報
 */
const addEvent = (
  state: AddEventState = { event: 
    { title: '', holdStartDate: new Date(), holdEndDate: new Date() },
    isLoading: true
  },
  action: AddEventAction
): EventState => {
  switch (action.type) {
    case ActionTypes.REQUEST_ADD_EVENT: {
      return Object.assign({}, state, {
        event: action.event,
        isLoading: action.isLoading,
        error: null,
      });
    }
    case ActionTypes.SUCCESS_ADD_EVENT: {
      return Object.assign({}, state, {
        isLoading: action.isLoading,
        addedEventId: action.addedEventId,
      });
    }
    case ActionTypes.ERROR_ADD_EVENT: {
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

interface RecentlyAddedEventState {
  events: Array<Event>;
  isLoading: boolean;
}

/**
 * 最近追加されたイベントのstateをreduceする
 *
 * @param {RecentlyAddedEventState} state state情報
 * @param {RecentlyAddedEventAction} action action情報
 *
 * @returns {RecentlyAddedEventState} reduce後のstate情報
 */
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

/**
 * 最近終了したイベントのstateをreduceする
 *
 * @param {RecentlyFinishedEventState} state state情報
 * @param {RecentlyFinishedEventAction} action action情報
 *
 * @returns {RecentlyFinishedEventState} reduce後のstate情報
 */
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
  event,
  addEvent,
  recentlyAddedEvent,
  recentlyFinishedEvent
});
export default eventsReducer;
