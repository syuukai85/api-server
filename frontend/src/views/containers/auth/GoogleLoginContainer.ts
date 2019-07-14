import { connect } from 'react-redux';
import GoogleLoginButton from '../../components/auth/GoogleLoginButton';
import operations from '../../../state/ducks/auth/operations';
import actions from '../../../state/ducks/auth/actions';
import Redux from 'redux';

const mapDispatchToProps = (dispatch: Redux.Dispatch) => {
  return {
    onClick: async () => {
      const response = await operations.loginGoogle();
      if (response.user === null) return;
      dispatch(actions.isLogin(response.user));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(GoogleLoginButton);
