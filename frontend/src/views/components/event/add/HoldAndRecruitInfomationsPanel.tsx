import React from 'react';
import { FormValues } from '../../../forms/addEvent';
import { FormikProps } from 'formik';
import Grid from '@material-ui/core/Grid';
import Select from 'react-select';
import RangeDatePicker from '../../form/RangeDatePicker';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';

// 開催者を一括で取得する処理はまた別pullreqで対応予定
const organizers = [
  { value: 1, label: 'organizer1' },
  { value: 2, label: 'organizer2' },
  { value: 3, label: 'organizer3' }
];

const HoldAndRecruitInfomationsPanel: React.FC<FormikProps<FormValues>> = (
  props: FormikProps<FormValues>
) => {
  const { values, handleChange } = props;
  return (
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
            <Typography variant="overline">主催者</Typography>
            <Select
              closeMenuOnSelect={false}
              isMulti
              value={values.organizers}
              onChange={handleChange('organizers')}
              options={organizers}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="overline">募集人数</Typography>
            <Input
              id="adornment-capacity"
              value={values.capacity}
              onChange={handleChange('capacity')}
              endAdornment={<InputAdornment position="end">人</InputAdornment>}
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
  );
};

export default HoldAndRecruitInfomationsPanel;
