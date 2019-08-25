import React, { useEffect } from 'react';
import { Event } from 'typescript-fetch-api';
import { FormValues } from '../../forms/addEvent';
import { FormikProps } from 'formik';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

interface OtherProps {
  isLoading: boolean;
  error: Error;
  addEvent: (event: Event) => void;
}

const AddEvent: React.FC<FormikProps<FormValues>> = (
  props: OtherProps & FormikProps<FormValues>
) => {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
    addEvent
  } = props;
  const effectFn = () => {
    addEvent({ title: 'sample' });
  };
  console.log(errors);
  useEffect(effectFn, []);
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        id="standard-name"
        label="タイトル"
        value={values.title}
        onChange={handleChange('title')}
        margin="normal"
      />
      <TextField
        id="standard-name"
        label="画像URL"
        value={values.imageUrl}
        onChange={handleChange('imageUrl')}
        margin="normal"
      />
      <Button
        variant="contained"
        color="primary"
        type="submit"
        disabled={isSubmitting || !!(errors.title && touched.title)}
      >
        イベント作成
      </Button>
    </form>
  );
};

export default AddEvent;
