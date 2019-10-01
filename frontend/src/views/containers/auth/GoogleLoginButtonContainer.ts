import { connect } from 'react-redux';
import GoogleLoginButton from '../../components/auth/GoogleLoginButton';
import operations from '../../../state/ducks/auth/operations';
import Redux from 'redux';

const mapDispatchToProps = (dispatch: Redux.Dispatch) => {
  return {
    onClick: () => {
      operations.loginGoogle(dispatch);
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(GoogleLoginButton);
