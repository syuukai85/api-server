import Redux from 'redux';
import { Event } from 'typescript-fetch-api';
import actions from './actions';

const searchEvent = (dispatch: Redux.Dispatch, eventId: string) => {
  dispatch(actions.searchEvent.searchEvent(eventId));
};

const addEvent = (dispatch: Redux.Dispatch, event: Event) => {
  dispatch(actions.addEvent.addEvent(event));
};

const searchRecentlyAddedEvent = (dispatch: Redux.Dispatch) => {
  dispatch(actions.searchRecentlyAddedEvent.searchRecentlyAddedEvent());
};

const searchRecentlyFinishedEvent = (dispatch: Redux.Dispatch) => {
  dispatch(actions.searchRecentlyFinishedEvent.searchRecentlyFinishedEvent());
};

export default {
  searchEvent,
  addEvent,
  searchRecentlyAddedEvent,
  searchRecentlyFinishedEvent
};
