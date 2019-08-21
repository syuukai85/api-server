import { connect } from 'react-redux';
import { Event } from 'typescript-fetch-api';
import AddEvent from '../../components/event/AddEvent';
import oparations from '../../../state/ducks/events/operations';
import Redux from 'redux';

interface State {
  eventsState: {
    addEvent: {
      isLoading: boolean;
      error: Error;
    };
  };
}

const mapStateToProps = (state: State) => {
  return {
    isLoading: state.eventsState.addEvent.isLoading,
    error: state.eventsState.addEvent.error
  };
};

const mapDispatchToProps = (dispatch: Redux.Dispatch) => {
  return {
    addEvent: (event: Event) => oparations.addEvent(dispatch, event)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddEvent);
