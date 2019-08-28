import React, { useEffect } from 'react';
import { Event } from 'typescript-fetch-api';
import { FormValues } from '../../forms/addEvent';
import { FormikProps } from 'formik';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Select from 'react-select';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import Description from '../form/Description';
import SelectColor from '../form/SelectColor';
import UploadFileButton from '../form/UploadFileButton';
import RangeDatePicker from '../form/RangeDatePicker';
import PreviewHeaderImage from '../form/PreviewHeaderImage';

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

// 開催者を一括で取得する処理はまた別pullreqで対応予定
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
  const { values, handleChange, handleSubmit, addEvent, setFieldValue } = props;
  const effectFn = () => {
    addEvent({ title: 'sample' });
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
      <UploadFileButton
        onChange={(e: any) => {
          setFieldValue('imageFile', e.target.files[0]);
        }}
      />
      <PreviewHeaderImage
        colorCode={values.colorCode}
        imageFile={values.imageFile}
      />
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
      <RangeDatePicker
        idPrefix="recruit"
        labelPrefix="募集"
        startDate={values.recruitStartDate}
        endDate={values.recruitEndDate}
        startDateOnChange={handleChange('recruitStartDate')}
        endDateOnChange={handleChange('recruitEndDate')}
      />
      <RangeDatePicker
        idPrefix="hold"
        labelPrefix="開催"
        startDate={values.holdStartDate}
        endDate={values.holdEndDate}
        startDateOnChange={handleChange('holdStartDate')}
        endDateOnChange={handleChange('holdEndDate')}
      />
      <Button variant="contained" color="primary" type="submit">
        イベント作成
      </Button>
    </form>
  );
};

export default AddEvent;
