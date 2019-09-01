import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Event } from 'typescript-fetch-api';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles({
  image: {
    width: '90%',
    marginTop: '10px',
  },
});

interface Props {
  event: Event;
}

const completeStumpImg = require('../../../images/event/completeStump.png');

/**
 * お布施を行うイベント行
 */
const EnrollmentEventListItem: React.FC<Props> = (props: Props) => {
  const classes = useStyles({});
  return (
    <Grid item xs={12}>
      <Grid item xs={12}>
        <Typography variant="h5">{props.event.title}</Typography>
        <Divider />
      </Grid>
      <Grid container>
        <Divider />
        <Grid item xs={12} sm={4}>
          <img className={classes.image} src={completeStumpImg} alt="" />
        </Grid>
        <Grid item xs={12} sm={4}>
          <img className={classes.image} src={props.event.qrCodeUrl} alt="" />
        </Grid>
        <Grid item xs={12} sm={4}>
          <img className={classes.image} src={props.event.imageUrl} alt="" />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default EnrollmentEventListItem;
