import Redux from 'redux';
import actions from './actions';

const searchRecentlyAddedGroup = async (dispatch: Redux.Dispatch) => {
  dispatch(actions.searchRecentlyAddedGroup.searchRecentlyAddedGroup());
};

export default { searchRecentlyAddedGroup };
