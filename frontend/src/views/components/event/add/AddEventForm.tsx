import React, { useEffect } from 'react';
import { FormValues } from '../../../forms/addEvent';
import { FormikProps } from 'formik';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import BasicInfomationPanel from './BasicInfomationsPanel';
import ThrowingMoneyPanel from './ThrowingMoneyPanel';
import HoldAndRecruitInfomationsPanel from './HoldAndRecruitInfomationsPanel';
import AdditionalInfomationPanel from './AdditionalInfomationPanel';
import { AddEventFormProps } from './AddEventFormProps';
import { Prompt } from 'react-router';

// form全ての要素を平置きしてるけどblock単位に分けた方が見やすい？
const AddEventForm: React.FC<AddEventFormProps & FormikProps<FormValues>> = (
  props: AddEventFormProps & FormikProps<FormValues>
) => {
  const { handleSubmit, addEvent, dirty } = props;
  const effectFn = () => {
  };
  useEffect(effectFn, []);
  return (
    <form onSubmit={handleSubmit}>
      <Prompt when={dirty} message="未保存の変更があります。終了してもよろしいですか？" />
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
