import React, { useEffect } from 'react';
import { Event } from 'typescript-fetch-api';
import { FormValues } from '../../../forms/addEvent';
import { FormikProps } from 'formik';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import BasicInfomationPanel from './BasicInfomationsPanel';
import ThrowingMoneyPanel from './ThrowingMoneyPanel';
import HoldAndRecruitInfomationsPanel from './HoldAndRecruitInfomationsPanel';
import AdditionalInfomationPanel from './AdditionalInfomationPanel';

interface OtherProps {
  isLoading: boolean;
  error: Error;
  addEvent: (event: Event) => void;
}

// form全ての要素を平置きしてるけどblock単位に分けた方が見やすい？
const AddEventForm: React.FC<OtherProps & FormikProps<FormValues>> = (props: OtherProps & FormikProps<FormValues>) => {
  const { handleSubmit, addEvent } = props;
  const effectFn = () => {
    addEvent({ title: 'sample' });
  };
  useEffect(effectFn, []);
  return (
    <form onSubmit={handleSubmit}>
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
