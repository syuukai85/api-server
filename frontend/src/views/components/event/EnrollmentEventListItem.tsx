import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const logo = require('../../logo.svg');

const EnrollmentEventListItem: React.FC = () => {
  return (
    <Grid xs={12}>
      <Grid item xs={12}>
        <Typography variant="h5">Event Name</Typography>
        <Divider />
      </Grid>
      <Grid container>
        <Divider />
        <Grid item xs={12} sm={4}>
          <img src={logo} alt="" />
        </Grid>
        <Grid item xs={12} sm={4}>
          <img src={logo} alt="" />
        </Grid>
        <Grid item xs={12} sm={4}>
          <img src={logo} alt="" />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default EnrollmentEventListItem;
