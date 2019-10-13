import { connect } from 'react-redux';
import { Event } from 'typescript-fetch-api';
import AddEventForm from '../../components/event/add/AddEventForm';
import eventOparations from '../../../state/ducks/events/operations';
import notificationOparations from '../../../state/ducks/notification/operation';
import { VariantIconKeys } from '../../../state/ducks/notification/types';
import { default as addEventForm, FormValues } from '../../forms/addEvent';
import Redux from 'redux';
import * as H from 'history';
import { withFormik } from 'formik';
import { withRouter } from 'react-router';

interface State {
  eventsState: {
    addEvent: {
      isLoading: boolean;
      error: Error;
      addedEventId?: number;
    };
  };
}

const mapStateToProps = (state: State) => {
  return {
    isLoading: state.eventsState.addEvent.isLoading,
    error: state.eventsState.addEvent.error,
    addedEventId: state.eventsState.addEvent.addedEventId,
    isExistsError: state.eventsState.addEvent.error !== null,
  };
};

const mapDispatchToProps = (dispatch: Redux.Dispatch) => {
  return {
    addEvent: (event: Event) => eventOparations.addEvent(dispatch, event),
    showNotification: (message: string, variant: VariantIconKeys) =>
      notificationOparations.showNotification(dispatch, message, variant),
    showNotificationSuccess: () => {
      notificationOparations.showNotification(dispatch, 'イベント作成に成功しました', 'success');
    },
    showNotificationError: () => {
      notificationOparations.showNotification(
        dispatch,
        'ネットワークエラーが発生しています。時間をおいて再度実行してください',
        'error'
      );
    },
    moveEventDetail: (addedEventId: number, history: H.History) => {
      history.push(`/events/${addedEventId}`);
    },
    isValidFileFormat: (format: string) => addEventForm.isValidFileFormat(format)
  };
};

type SelectOption = { value: number; label: string };

/**
 * 選択されたoptionの値から、apiへ送る値を抽出する関数
 *
 * @param {SelectOption} option 選択されたoptionの値
 */
const selectedValueExceptor = (option: SelectOption) => ({
  id: option.value,
  name: option.label,
});

// NOTE: formikのmapPropsToValuesのcontainer, formik propsとの型付けがまだいまいち理解できていない。anyで仮置き。直したい。

// TODO: 今、画像関連(QRコード, ヘッダー画像)に関しては、どこで画像を作成するのかが決まっていないので、
// 作る箇所次第では、このsubmitのタイミングで作成して、urlだけDBに保存するとかの対応になる。
// firebaseなら簡単に実装できそう。これを使うことになるのであれば導入は案外楽そう
// https://firebase.google.com/docs/storage/web/upload-files?hl=ja
const addEventFormEnhancer = withRouter(
  withFormik<any, FormValues>({
    mapPropsToValues: addEventForm.mapPropsToValues,
    validationSchema: addEventForm.validateSchema,
    handleSubmit: async ({ ...formValues }: FormValues, { props }) => {
      props.addEvent({
        ...formValues,
        organizers: formValues.organizers.map(organizer => selectedValueExceptor(organizer)),
        categories:
          formValues.categories !== [] && formValues.categories.map(category => selectedValueExceptor(category)),
        group: formValues.group !== null && selectedValueExceptor(formValues.group),
        venue: formValues.venue !== null && selectedValueExceptor(formValues.venue),
      });
    },
  })(AddEventForm)
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(addEventFormEnhancer);
