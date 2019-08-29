import React, { useEffect } from 'react';
import { Event } from 'typescript-fetch-api';
import { FormValues } from '../../../forms/addEvent';
import { FormikProps } from 'formik';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Select from 'react-select';
import Input from '@material-ui/core/Input';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import InputAdornment from '@material-ui/core/InputAdornment';
import Description from '../../form/Description';
import SelectColor from '../../form/SelectColor';
import UploadFileButton from '../../form/UploadFileButton';
import RangeDatePicker from '../../form/RangeDatePicker';
import PreviewHeaderImage from '../../form/PreviewHeaderImage';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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

// form全ての要素を平置きしてるけどblock単位に分けた方が見やすい？
const AddEventForm: React.FC<OtherProps & FormikProps<FormValues>> = (
  props: OtherProps & FormikProps<FormValues>
) => {
  const { values, handleChange, handleSubmit, addEvent, setFieldValue } = props;
  const effectFn = () => {
    addEvent({ title: 'sample' });
  };
  useEffect(effectFn, []);
  return (
    <form onSubmit={handleSubmit}>
      <ExpansionPanel defaultExpanded>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>基本情報</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <TextField
                id="standard-name"
                label="イベント名"
                value={values.title}
                onChange={handleChange('title')}
                margin="normal"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Description
                value={values.description}
                onChange={handleChange('description')}
              />
            </Grid>
            <Grid item xs={12}>
              <Box>
                <SelectColor
                  colorCode={values.colorCode}
                  onChange={e => setFieldValue('colorCode', e.hex)}
                />
              </Box>
              <Box>
                <UploadFileButton
                  onChange={(e: any) => {
                    setFieldValue('imageFile', e.target.files[0]);
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <PreviewHeaderImage
                colorCode={values.colorCode}
                imageFile={values.imageFile}
              />
            </Grid>
          </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel defaultExpanded>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>投げ銭QRコード画像</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <UploadFileButton
                onChange={(e: any) => {
                  setFieldValue('qrImageFile', e.target.files[0]);
                }}
              />
            </Grid>
          </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel defaultExpanded>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>開催・募集情報</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Select
                closeMenuOnSelect={false}
                isMulti
                value={values.organizers}
                onChange={handleChange('organizers')}
                options={organizers}
              />
            </Grid>
            <Grid item xs={12}>
              <Input
                id="adornment-capacity"
                value={values.capacity}
                onChange={handleChange('capacity')}
                endAdornment={
                  <InputAdornment position="end">人</InputAdornment>
                }
                aria-describedby="capacity-helper-text"
                inputProps={{
                  'aria-label': 'capacity'
                }}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <RangeDatePicker
                idPrefix="recruit"
                labelPrefix="募集"
                startDate={values.recruitStartDate}
                endDate={values.recruitEndDate}
                startDateOnChange={handleChange('recruitStartDate')}
                endDateOnChange={handleChange('recruitEndDate')}
              />
            </Grid>
            <Grid item xs={12}>
              <RangeDatePicker
                idPrefix="hold"
                labelPrefix="開催"
                startDate={values.holdStartDate}
                endDate={values.holdEndDate}
                startDateOnChange={handleChange('holdStartDate')}
                endDateOnChange={handleChange('holdEndDate')}
              />
            </Grid>
          </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel defaultExpanded>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>イベント追加情報</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Select
                value={values.group}
                onChange={handleChange('group')}
                options={groups}
              />
            </Grid>
            <Grid item xs={12}>
              <Select
                closeMenuOnSelect={false}
                isMulti
                value={values.categories}
                onChange={handleChange('categories')}
                options={categories}
              />
            </Grid>
          </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <Grid item xs={12}>
        <Button variant="contained" color="primary" type="submit">
          イベント作成
        </Button>
      </Grid>
    </form>
  );
};

export default AddEventForm;
