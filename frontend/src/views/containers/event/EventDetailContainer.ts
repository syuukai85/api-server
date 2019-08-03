import { connect } from 'react-redux';
import EventDetail from '../../components/event/EventDetail';
import * as eventSelector from '../../../state/ducks/events/selectors';

interface State {
  router: {
    location: {
      pathname: string;
    };
  };
}

const mapStateToProps = (state: State) => {
  return {
    id: eventSelector.getEventIdFromRouter(state)
  };
};

export default connect(mapStateToProps)(EventDetail);
