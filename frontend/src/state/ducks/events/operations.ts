import Redux from 'redux';
import actions from './actions';

const searchRecentlyAddedEvent = async (dispatch: Redux.Dispatch) => {
  dispatch(actions.searchRecentlyAddedEvent());
};

const searchRecentlyFinishedEvent = async (dispatch: Redux.Dispatch) => {
  dispatch(actions.searchRecentlyFinishedEvent());
};

export default { searchRecentlyAddedEvent, searchRecentlyFinishedEvent };
