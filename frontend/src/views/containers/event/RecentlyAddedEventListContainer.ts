import { connect } from 'react-redux';
import { Event } from 'typescript-fetch-api';
import oparations from '../../../state/ducks/events/operations';
import EventList from '../../components/event/EventList';
import Redux from 'redux';

interface State {
  eventsState: {
    recentlyAddedEvent: {
      events: Array<Event>;
      isLoading: boolean;
      error: Error;
    };
  };
}

const mapStateToProps = (state: State) => {
  return {
    events: state.eventsState.recentlyAddedEvent.events,
    isLoading: state.eventsState.recentlyAddedEvent.isLoading,
    error: state.eventsState.recentlyAddedEvent.error
  };
};

const mapDispatchToProps = (dispatch: Redux.Dispatch) => {
  return {
    searchEvent: () => oparations.searchRecentlyAddedEvent(dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventList);
