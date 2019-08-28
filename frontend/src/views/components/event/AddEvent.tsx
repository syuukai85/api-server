import React, { useEffect } from 'react';
import { Event } from 'typescript-fetch-api';
import { FormValues } from '../../forms/addEvent';
import { FormikProps } from 'formik';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Select from 'react-select';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from '@material-ui/pickers';
import { makeStyles } from '@material-ui/core/styles';
import Description from '../form/Description';
import SelectColor from '../form/SelectColor';

import 'react-mde/lib/styles/css/react-mde-all.css';

const useStyles = makeStyles({
  swatch: {
    padding: '5px',
    background: '#fff',
    borderRadius: '1px',
    boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
    display: 'inline-block',
    cursor: 'pointer'
  },
  color: {
    width: '36px',
    height: '14px',
    borderRadius: '2px'
  },
  colorCode: (props: any) => ({
    background: props.colorCode
  }),
  popover: {
    position: 'absolute',
    zIndex: 2
  },
  cover: {
    position: 'fixed',
    top: '0px',
    right: '0px',
    bottom: '0px',
    left: '0px'
  }
});

// グループを一括で取得する処理はまた別pullreqで対応予定
const groups = [
  { value: 1, label: 'group1' },
  { value: 2, label: 'group2' },
  { value: 3, label: 'group3' }
];

// カテゴリーを一括で取得する処理はまた別pullreqで対応予定
const categories = [
  { value: 1, label: 'category1' },
  { value: 2, label: 'category2' },
  { value: 3, label: 'category3' }
];

const organizers = [
  { value: 1, label: 'organizer1' },
  { value: 2, label: 'organizer2' },
  { value: 3, label: 'organizer3' }
];

interface OtherProps {
  isLoading: boolean;
  error: Error;
  addEvent: (event: Event) => void;
}

const AddEvent: React.FC<OtherProps & FormikProps<FormValues>> = (
  props: OtherProps & FormikProps<FormValues>
) => {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleSubmit,
    isSubmitting,
    addEvent,
    setFieldValue
  } = props;
  const classes = useStyles({ colorCode: values.colorCode });
  const effectFn = () => {
    addEvent({ title: 'sample' });
  };
  const [displayColorPicker, setDisplayColorPicker] = React.useState(false);
  const handleClick = () => {
    setDisplayColorPicker(true);
  };
  const handleClose = () => {
    setDisplayColorPicker(false);
  };
  useEffect(effectFn, []);
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        id="standard-name"
        label="イベント名"
        value={values.title}
        onChange={handleChange('title')}
        margin="normal"
      />
      <Description
        value={values.description}
        onChange={handleChange('description')}
      />
      <SelectColor
        colorCode={values.colorCode}
        onChange={e => setFieldValue('colorCode', e.hex)}
      />
      <Button variant="contained" component="label">
        Upload File
        <input
          id="selected-image"
          type="file"
          onChange={(e: any) => {
            setFieldValue('imageFile', e.target.files[0]);
          }}
          style={{ display: 'none' }}
        />
      </Button>
      <Select
        value={values.group}
        onChange={handleChange('group')}
        options={groups}
      />
      <Input
        id="adornment-capacity"
        value={values.capacity}
        onChange={handleChange('capacity')}
        endAdornment={<InputAdornment position="end">人</InputAdornment>}
        aria-describedby="capacity-helper-text"
        inputProps={{
          'aria-label': 'capacity'
        }}
      />
      <Select
        closeMenuOnSelect={false}
        isMulti
        value={values.categories}
        onChange={handleChange('categories')}
        options={categories}
      />
      <Select
        closeMenuOnSelect={false}
        isMulti
        value={values.organizers}
        onChange={handleChange('organizers')}
        options={organizers}
      />
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          margin="normal"
          id="recruitStartDate"
          label="募集開始日"
          format="yyyy/MM/dd"
          value={values.recruitStartDate}
          onChange={handleChange('recruitStartDate')}
        />
        <KeyboardTimePicker
          margin="normal"
          id="recruitStartTime"
          label="募集開始時間"
          value={values.recruitStartDate}
          onChange={handleChange('recruitStartDate')}
        />
        <KeyboardDatePicker
          margin="normal"
          id="recruitEndDate"
          label="募集終了日"
          format="yyyy/MM/dd"
          value={values.recruitEndDate}
          onChange={handleChange('recruitEndDate')}
        />
        <KeyboardTimePicker
          margin="normal"
          id="recruitEndTime"
          label="募集終了時間"
          value={values.recruitEndDate}
          onChange={handleChange('recruitEndDate')}
        />
      </MuiPickersUtilsProvider>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          margin="normal"
          id="holdStartDate"
          label="開催開始日"
          format="yyyy/MM/dd"
          value={values.holdStartDate}
          onChange={handleChange('holdStartDate')}
        />
        <KeyboardTimePicker
          margin="normal"
          id="holdStartTime"
          label="開催開始時間"
          value={values.holdStartDate}
          onChange={handleChange('holdStartDate')}
        />
        <KeyboardDatePicker
          margin="normal"
          id="holdEndDate"
          label="開催終了日"
          format="yyyy/MM/dd"
          value={values.holdEndDate}
          onChange={handleChange('holdEndDate')}
        />
        <KeyboardTimePicker
          margin="normal"
          id="holdEndTime"
          label="開催終了時間"
          value={values.holdEndDate}
          onChange={handleChange('holdEndDate')}
        />
      </MuiPickersUtilsProvider>
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
