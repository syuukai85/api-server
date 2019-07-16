import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';

const logo = require('../../logo.svg');

const useStyles = makeStyles({
  date: {
    fontSize: '60px'
  },
  time: {
    fontSize: '17px'
  },
  eventContainer: {
    height: '200px'
  }
});

const EventListItem: React.FC = () => {
  const classes = useStyles({});
  return (
    <ListItem>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={3}>
          <div className={classes.date}>6/18</div>
          <div className={classes.time}>11:00~19:00</div>
        </Grid>
        <Grid item xs={12} sm={9}>
          <Grid container>
            <Grid item xs={12}>
              <Typography variant="h5">Event Name</Typography>
              <Divider />
            </Grid>
          </Grid>
          <Grid container>
            <Divider />
            <Grid item xs={12} sm={8}>
              <div>aaa</div>
            </Grid>
            <Grid item xs={12} sm={4}>
              <img src={logo} alt="" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </ListItem>
  );
};

export default EventListItem;
