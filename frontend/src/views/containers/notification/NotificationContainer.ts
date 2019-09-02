import Notification from '../../components/notification/Notification';
import { connect } from 'react-redux';
import Redux from 'redux';
import notificationOperations from '../../../state/ducks/notification/operation';

interface State {
  notificationState: {
    notification: {
      open: boolean;
      message: string;
    };
  };
}

const mapStateToProps = (state: State) => {
  return {
    open: state.notificationState.notification.open,
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
