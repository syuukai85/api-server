import React from 'react';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
  MaterialUiPickersDate
} from '@material-ui/pickers';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';

interface Props {
  idPrefix: string;
  labelPrefix: string;
  startDate: Date;
  endDate: Date;
  startDateOnChange: (date: MaterialUiPickersDate) => void;
  endDateOnChange: (date: MaterialUiPickersDate) => void;
}

const RangeDatePicker: React.FC<Props> = (props: Props) => {
  const {
    idPrefix,
    labelPrefix,
    startDate,
    endDate,
    startDateOnChange,
    endDateOnChange
  } = props;
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        margin="normal"
        id={`${idPrefix}StartDate`}
        label={`${labelPrefix}開始日`}
        format="yyyy/MM/dd"
        value={startDate}
        onChange={startDateOnChange}
      />
      <KeyboardTimePicker
        margin="normal"
        id={`${idPrefix}StartTime`}
        label={`${labelPrefix}開始時間`}
        value={startDate}
        onChange={startDateOnChange}
      />
      <KeyboardDatePicker
        margin="normal"
        id={`${idPrefix}EndDate`}
        label={`${labelPrefix}終了日`}
        format="yyyy/MM/dd"
        value={endDate}
        onChange={endDateOnChange}
      />
      <KeyboardTimePicker
        margin="normal"
        id={`${idPrefix}EndTime`}
        label={`${labelPrefix}終了時間`}
        value={endDate}
        onChange={endDateOnChange}
      />
    </MuiPickersUtilsProvider>
  );
};

export default RangeDatePicker;
