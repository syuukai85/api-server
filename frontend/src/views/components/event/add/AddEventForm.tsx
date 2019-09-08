import React from 'react';
import { Event } from 'typescript-fetch-api';
import { FormValues } from '../../../forms/addEvent';
import { FormikProps } from 'formik';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import BasicInfomationPanel from './BasicInfomationsPanel';
import ThrowingMoneyPanel from './ThrowingMoneyPanel';
import HoldAndRecruitInfomationsPanel from './HoldAndRecruitInfomationsPanel';
import AdditionalInfomationPanel from './AdditionalInfomationPanel';
import * as H from 'history';

interface OtherProps {
  isLoading: boolean;
  error: Error;
  addedEventId?: number;
  isExistsError: boolean;
  history: H.History;
  addEvent: (event: Event) => void;
  showErrorMessage: (message: string) => void;
  showNotificationSuccess: () => void;
  showNotificationError: () => void;
  moveEventDetail: (addedEventId: number, history: H.History) => void;
}

// form全ての要素を平置きしてるけどblock単位に分けた方が見やすい？
const AddEventForm: React.FC<OtherProps & FormikProps<FormValues>> = (props: OtherProps & FormikProps<FormValues>) => {
  // TODO: presentational にロジックがよりすぎ。containerに寄せられる？
  if (!props.isLoading) {
    if (props.isExistsError) {
      props.showNotificationError();
    }
    if (props.addedEventId !== void 0) {
      props.moveEventDetail(props.addedEventId, props.history);
      props.showNotificationSuccess();
    }
  }
  return (
    <form onSubmit={props.handleSubmit}>
      <BasicInfomationPanel {...props} />
      <ThrowingMoneyPanel {...props} />
      <HoldAndRecruitInfomationsPanel {...props} />
      <AdditionalInfomationPanel {...props} />
      <Grid item xs={12}>
        <Button fullWidth variant="contained" color="primary" type="submit">
          イベント作成
        </Button>
      </Grid>
    </form>
  );
};

export default AddEventForm;
