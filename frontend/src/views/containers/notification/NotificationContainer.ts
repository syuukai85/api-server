import Notification from '../../components/notification/Notification';
import { connect } from 'react-redux';
import Redux from 'redux';
import notificationOperations from '../../../state/ducks/notification/operation';
import { VariantIconKeys } from '../../../state/ducks/notification/types';

interface State {
  notificationState: {
    notification: {
      open: boolean;
      variant: VariantIconKeys;
      message: string;
    };
  };
}

const mapStateToProps = (state: State) => {
  return {
    open: state.notificationState.notification.open,
    variant: state.notificationState.notification.variant,
    message: state.notificationState.notification.message,
  };
};

const mapDispatchToProps = (dispatch: Redux.Dispatch) => {
  return {
    handleClose: () => notificationOperations.closeNotification(dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Notification);
