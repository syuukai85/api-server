import { connect } from 'react-redux';
import { Group } from 'typescript-fetch-api';
import GroupList from '../../components/group/GroupList';
import oparations from '../../../state/ducks/groups/operations';
import Redux from 'redux';

interface State {
  groupsState: {
    recentlyAddedGroup: {
      groups: Array<Group>;
      isLoading: boolean;
      error: Error;
    };
  };
}

const mapStateToProps = (state: State) => {
  return {
    groups: state.groupsState.recentlyAddedGroup.groups,
    isLoading: state.groupsState.recentlyAddedGroup.isLoading,
    error: state.groupsState.recentlyAddedGroup.error
  };
};

const mapDispatchToProps = (dispatch: Redux.Dispatch) => {
  return {
    searchGroup: () => oparations.searchRecentlyAddedGroup(dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupList);
