import { connect } from 'react-redux';
import { Event } from 'typescript-fetch-api';
import AddEventForm from '../../components/event/add/AddEventForm';
import oparations from '../../../state/ducks/events/operations';
import { default as addEventForm, AddEventFormInitValues, FormValues } from '../../forms/addEvent';
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
    error: state.eventsState.addEvent.error,
  };
};

const mapDispatchToProps = (dispatch: Redux.Dispatch) => {
  return {
    addEvent: (event: Event) => oparations.addEvent(dispatch, event),
  };
};

// NOTE: formikのmapPropsToValuesのcontainer, formik propsとの型付けがまだいまいち理解できていない。anyで仮置き。直したい。
const addEventFormEnhancer = withFormik<any, FormValues>({
  mapPropsToValues: addEventForm.mapPropsToValues,
  validationSchema: addEventForm.validateSchema,
  handleSubmit: async (
    {
      title,
      description,
      colorCode,
      imageFile,
      qrCodeFile,
      capacity,
      recruitStartDate,
      recruitEndDate,
      holdStartDate,
      holdEndDate,
      organizers,
      venue,
      categories,
      group,
    }: FormValues,
    { props, setSubmitting, setErrors }
  ) => {
    await props.addEvent({
      title,
      description,
      colorCode,
      imageFile,
      qrCodeFile,
      capacity,
      recruitStartDate,
      recruitEndDate,
      holdStartDate,
      holdEndDate,
      organizers,
      venue,
      categories,
      group,
    });
  },
})(AddEventForm);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(addEventFormEnhancer);
