import { connect } from 'react-redux';
import oparations from '../../../state/ducks/events/operations';
import EventList from '../../components/event/EventList';
import Redux from 'redux';

interface State {
  eventsState: {
    newlyEvent: {
      events: Array<Event>;
      isLoading: boolean;
    };
  };
}

const mapStateToProps = (state: State) => {
  return {
    events: state.eventsState.newlyEvent.events,
    isLoading: state.eventsState.newlyEvent.isLoading
  };
};

const mapDispatchToProps = (dispatch: Redux.Dispatch) => {
  return {
    searchEvent: () => oparations.searchNewlyEvent(dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventList);
