import { connect } from 'react-redux';
import GoogleLoginButton from '../../components/auth/GoogleLoginButton';
import operations from '../../../state/ducks/auth/operations';
import Redux from 'redux';

const mapStateToProps = () => {};
const mapDispatchToProps = (dispatch: Redux.Dispatch) => {
  return {
    onClick: () => {
      operations.loginGoogle();
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GoogleLoginButton);
