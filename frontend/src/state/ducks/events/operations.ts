import Redux from 'redux';
import actions from './actions';

const searchEvent = (dispatch: Redux.Dispatch, eventId: string) => {
  dispatch(actions.searchEvent.searchEvent(eventId));
};

const searchRecentlyAddedEvent = (dispatch: Redux.Dispatch) => {
  dispatch(actions.searchRecentlyAddedEvent());
};

const searchRecentlyFinishedEvent = (dispatch: Redux.Dispatch) => {
  dispatch(actions.searchRecentlyFinishedEvent());
};

export default {
  searchEvent,
  searchRecentlyAddedEvent,
  searchRecentlyFinishedEvent
};
