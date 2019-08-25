import { connect } from 'react-redux';
import { Event } from 'typescript-fetch-api';
import AddEvent from '../../components/event/AddEvent';
import oparations from '../../../state/ducks/events/operations';
import {
  default as addEventForm,
  AddEventFormInitValues,
  FormValues
} from '../../forms/addEvent';
import Redux from 'redux';
import { withFormik } from 'formik';

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

const addEventFormEnhancer = withFormik<AddEventFormInitValues, FormValues>({
  mapPropsToValues: addEventForm.mapPropsToValues,
  validationSchema: addEventForm.validateSchema,
  handleSubmit: (
    {
      capacity,
      categories,
      colorCode,
      description,
      group,
      holdEndDate,
      holdStartDate,
      imageUrl,
      organizer,
      qrCodeUrl,
      recruitEndDate,
      recruitStartDate,
      title,
      venue
    }: FormValues,
    { props, setSubmitting, setErrors }
  ) => {
    console.log(
      capacity,
      categories,
      colorCode,
      description,
      group,
      holdEndDate,
      holdStartDate,
      imageUrl,
      organizer,
      qrCodeUrl,
      recruitEndDate,
      recruitStartDate,
      title,
      venue
    );
  }
})(AddEvent);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(addEventFormEnhancer);
