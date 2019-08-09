import { connect } from 'react-redux';
import { Group } from 'typescript-fetch-api';
import * as groupSelector from '../../../state/ducks/groups/selectors';
import oparations from '../../../state/ducks/groups/operations';
import Redux from 'redux';
import GroupDetail from '../../components/group/GroupDetail';

interface State {
  router: {
    location: {
      pathname: string;
    };
  };
  groupsState: {
    group: {
      group: Group;
      isLoading: boolean;
      error: Error;
    };
  };
}

const mapStateToProps = (state: State) => {
  return {
    id: groupSelector.getGroupIdFromRouter(state),
    group: state.groupsState.group.group,
    isLoading: state.groupsState.group.isLoading,
    error: state.groupsState.group.error
  };
};

const mapDispatchToProps = (dispatch: Redux.Dispatch) => {
  return {
    searchGroup: (groupId: string) => oparations.searchGroup(dispatch, groupId)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupDetail);
