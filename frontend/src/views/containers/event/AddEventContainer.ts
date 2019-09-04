import { connect } from 'react-redux';
import { Event } from 'typescript-fetch-api';
import AddEventForm from '../../components/event/add/AddEventForm';
import eventOparations from '../../../state/ducks/events/operations';
import notificationOparations from '../../../state/ducks/notification/operation';
import { VariantIconKeys } from '../../../state/ducks/notification/types';
import { default as addEventForm, FormValues } from '../../forms/addEvent';
import Redux from 'redux';
import { withFormik } from 'formik';
import { withRouter } from 'react-router';

interface State {
  eventsState: {
    addEvent: {
      isLoading: boolean;
      error: Error;
      addedEventId: number;
    };
  };
}

const mapStateToProps = (state: State) => {
  return {
    isLoading: state.eventsState.addEvent.isLoading,
    error: state.eventsState.addEvent.error,
    addedEventId: state.eventsState.addEvent.addedEventId,
  };
};

const mapDispatchToProps = (dispatch: Redux.Dispatch) => {
  return {
    addEvent: (event: Event) => eventOparations.addEvent(dispatch, event),
    showNotification: (message: string, variant: VariantIconKeys) =>
      notificationOparations.showNotification(dispatch, message, variant),
  };
};

// NOTE: formikのmapPropsToValuesのcontainer, formik propsとの型付けがまだいまいち理解できていない。anyで仮置き。直したい。
const addEventFormEnhancer = withRouter(
  withFormik<any, FormValues>({
    mapPropsToValues: addEventForm.mapPropsToValues,
    validationSchema: addEventForm.validateSchema,
    handleSubmit: async ({ ...formValues }: FormValues, { props }) => {
      await props.addEvent({
        ...formValues,
      });
      const isExistsError = props.error !== null;
      if (isExistsError) {
        props.showNotification('ネットワークエラーが発生しています。時間をおいて再度実行してください', 'error');
        return;
      }
      props.history.push(`/events/${props.addedEventId}`);
      props.showNotification('イベント作成に成功しました', 'success');
    },
  })(AddEventForm)
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(addEventFormEnhancer);
