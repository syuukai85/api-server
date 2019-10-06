import { connect } from 'react-redux';
import { Event } from 'typescript-fetch-api';
import EventDetail from '../../components/event/EventDetail';
import * as eventSelector from '../../../state/ducks/events/selectors';
import oparations from '../../../state/ducks/events/operations';
import Redux from 'redux';

interface State {
  router: {
    location: {
      pathname: string;
    };
  };
  eventsState: {
    event: {
      event: Event;
      isLoading: boolean;
      error: Error;
    };
  };
}

const mapStateToProps = (state: State) => {
  return {
    id: eventSelector.getEventIdFromRouter(state),
    event: state.eventsState.event.event,
    isLoading: state.eventsState.event.isLoading,
    error: state.eventsState.event.error
  };
};

const mapDispatchToProps = (dispatch: Redux.Dispatch) => {
  return {
    searchEvent: (eventId: string) => oparations.searchEvent(dispatch, eventId)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventDetail);
