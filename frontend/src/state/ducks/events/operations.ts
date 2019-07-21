import Redux from 'redux';
import actions from './actions';

const searchNewlyEvent = async (dispatch: Redux.Dispatch) => {
  dispatch(actions.searchNewlyEvent());
};

export default { searchNewlyEvent };
