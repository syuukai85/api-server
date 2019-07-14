import { connect } from 'react-redux';
import oparations from '../../../state/ducks/auth/operations';
import AuthGroup from '../../components/auth/AuthGroup';
import Redux from 'redux';

interface State {
  authState: {
    auth: {
      uid: string;
    };
  };
}

const mapStateToProps = (state: State) => {
  return {
    uid: state.authState.auth.uid
  };
};

const mapDispatchToProps = (dispatch: Redux.Dispatch) => {
  return {
    updateLoginState: () => oparations.updateLoginState(dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthGroup);
