import React from 'react';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
  MaterialUiPickersDate
} from '@material-ui/pickers';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  datePicker: {
    margin: theme.spacing(1)
  }
}));

interface Props {
  labelPrefix: string;
  startName: string;
  endName: string;
  startDate: Date;
  endDate: Date;
  startDateOnChange: (date: MaterialUiPickersDate) => void;
  endDateOnChange: (date: MaterialUiPickersDate) => void;
}

const RangeDatePicker: React.FC<Props> = (props: Props) => {
  const {
    labelPrefix,
    startName,
    endName,
    startDate,
    endDate,
    startDateOnChange,
    endDateOnChange
  } = props;
  const classes = useStyles({});
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <FormControl>
        <KeyboardDatePicker
          name={startName}
          label={`${labelPrefix}開始日`}
          format="yyyy/MM/dd"
          value={startDate}
          onChange={startDateOnChange}
          className={classes.datePicker}
        />
      </FormControl>
      <FormControl>
        <KeyboardTimePicker
          name={startName}
          label={`${labelPrefix}開始時間`}
          value={startDate}
          onChange={startDateOnChange}
          className={classes.datePicker}
        />
      </FormControl>
      <FormControl>
        <KeyboardDatePicker
          name={endName}
          label={`${labelPrefix}終了日`}
          format="yyyy/MM/dd"
          value={endDate}
          onChange={endDateOnChange}
          className={classes.datePicker}
        />
      </FormControl>
      <FormControl>
        <KeyboardTimePicker
          name={endName}
          label={`${labelPrefix}終了時間`}
          value={endDate}
          onChange={endDateOnChange}
          className={classes.datePicker}
        />
      </FormControl>
    </MuiPickersUtilsProvider>
  );
};

export default RangeDatePicker;
