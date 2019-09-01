import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import moment from 'moment';

const useStyles = makeStyles({
  date: {
    fontSize: '3.5vw',
  },
  time: {
    marginTop: '5px',
    fontSize: '1vw',
  },
});

interface Props {
  fromDate?: Date;
  toDate?: Date;
}

const HoldDateBox: React.FC<Props> = (props: Props) => {
  const classes = useStyles({});
  const getHoldStartDay = (date?: Date): string => (date !== void 0 ? moment(date).format('MM/DD') : '');

  const getHoldBetweenTime = (fromDate?: Date, toDate?: Date): string => {
    if (fromDate === void 0) return '';
    if (toDate === void 0) return '';
    const fromFormatted = moment(fromDate).format('HH:mm');
    const toFormatted = moment(toDate).format('HH:mm');
    return `${fromFormatted}~${toFormatted}`;
  };

  return (
    <>
      <Box className={classes.date} textAlign="center">
        {getHoldStartDay(props.fromDate)}
      </Box>
      <Box className={classes.time} textAlign="center">
        {getHoldBetweenTime(props.fromDate, props.toDate)}
      </Box>
    </>
  );
};

export default HoldDateBox;
