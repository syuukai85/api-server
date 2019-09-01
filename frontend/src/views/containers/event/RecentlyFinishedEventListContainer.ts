import { connect } from 'react-redux';
import { Event } from 'typescript-fetch-api';
import oparations from '../../../state/ducks/events/operations';
import EventList from '../../components/event/EventList';
import Redux from 'redux';

interface State {
  eventsState: {
    recentlyFinishedEvent: {
      events: Array<Event>;
      isLoading: boolean;
      error: Error;
    };
  };
}

const mapStateToProps = (state: State) => {
  return {
    events: state.eventsState.recentlyFinishedEvent.events,
    isLoading: state.eventsState.recentlyFinishedEvent.isLoading,
    error: state.eventsState.recentlyFinishedEvent.error,
  };
};

const mapDispatchToProps = (dispatch: Redux.Dispatch) => {
  return {
    searchEvent: () => oparations.searchRecentlyFinishedEvent(dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventList);
