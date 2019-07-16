import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
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
  },
  groupChipContainer: {
    margin: '10px'
  },
  userChipContainer: {
    margin: '10px'
  },
  category: {
    margin: '5px'
  }
});

const EventListItem: React.FC = () => {
  const classes = useStyles({});
  return (
    <ListItem>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={3}>
          <Box textAlign="left" fontSize={60}>
            6/18
          </Box>
          <Box textAlign="left" fontSize={17}>
            11:00~19:00
          </Box>
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
              <div className={classes.groupChipContainer}>
                <Chip avatar={<Avatar>T</Avatar>} label="takoyaki" />
              </div>
              <div className={classes.userChipContainer}>
                <Chip avatar={<Avatar>G</Avatar>} label="gtongy" />
              </div>
              <label>category</label>
              <div>
                <Chip className={classes.category} label="Swift" />
                <Chip className={classes.category} label="Go" />
                <Chip className={classes.category} label="React" />
              </div>
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
