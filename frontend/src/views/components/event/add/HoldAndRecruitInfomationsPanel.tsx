import React from 'react';
import { FormValues } from '../../../forms/addEvent';
import { FormikProps } from 'formik';
import Grid from '@material-ui/core/Grid';
import Select from 'react-select';
import RangeDatePicker from '../../form/RangeDatePicker';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ErrorMessage from '../../form/ErrorMessage';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';

// 開催者を一括で取得する処理はまた別pullreqで対応予定
const organizers = [
  { value: 1, label: 'organizer1' },
  { value: 2, label: 'organizer2' },
  { value: 3, label: 'organizer3' },
];

// 開催場所を一括で取得する処理はまた別pullreqで対応予定
const venues = [{ value: 1, label: 'venue1' }, { value: 2, label: 'venue2' }, { value: 3, label: 'venue3' }];

const HoldAndRecruitInfomationsPanel: React.FC<FormikProps<FormValues>> = (props: FormikProps<FormValues>) => {
  const { values, handleChange, handleBlur } = props;
  return (
    <ExpansionPanel defaultExpanded>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
        <Typography>開催・募集情報</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Typography variant="overline">主催者</Typography>
            <Select
              closeMenuOnSelect={false}
              isMulti
              value={values.organizers}
              onChange={handleChange('organizers')}
              options={organizers}
            />
            <ErrorMessage name="organizers" />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="overline">募集人数</Typography>
            <Input
              name="capacity"
              value={values.capacity}
              onChange={handleChange('capacity')}
              onBlur={handleBlur('capacity')}
              endAdornment={<InputAdornment position="end">人</InputAdornment>}
              fullWidth
            />
            <ErrorMessage name="capacity" />
          </Grid>
          <Grid item xs={12}>
            <RangeDatePicker
              labelPrefix="募集"
              startName="recruitStartDate"
              endName="recruitEndDate"
              startDate={values.recruitStartDate}
              endDate={values.recruitEndDate}
              startDateOnChange={handleChange('recruitStartDate')}
              endDateOnChange={handleChange('recruitEndDate')}
            />
            <ErrorMessage name="recruitStartDate" />
            <ErrorMessage name="recruitEndDate" />
          </Grid>
          <Grid item xs={12}>
            <RangeDatePicker
              labelPrefix="開催"
              startName="holdStartDate"
              endName="holdEndDate"
              startDate={values.holdStartDate}
              endDate={values.holdEndDate}
              startDateOnChange={handleChange('holdStartDate')}
              endDateOnChange={handleChange('holdEndDate')}
            />
            <ErrorMessage name="holdStartDate" />
            <ErrorMessage name="holdEndDate" />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="overline">開催場所</Typography>
            <Select closeMenuOnSelect={false} value={values.venue} onChange={handleChange('venue')} options={venues} />
            <ErrorMessage name="venue" />
          </Grid>
        </Grid>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

export default HoldAndRecruitInfomationsPanel;
