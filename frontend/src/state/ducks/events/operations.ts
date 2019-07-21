import Redux from 'redux';
import actions from './actions';

const searchRecentlyAddedEvent = async (dispatch: Redux.Dispatch) => {
  dispatch(actions.searchRecentlyAddedEvent());
};

export default { searchRecentlyAddedEvent };
