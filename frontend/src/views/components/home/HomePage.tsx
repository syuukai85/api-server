import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import EventList from '../event/EventList';
import BottomAppBar from '../appBar/BottomAppBar';

const HomePage: React.FC = () => {
  return (
    <>
      <Container>
        <Typography variant="h1">Homepage</Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <EventList />
          </Grid>
          <Grid item xs={12} sm={6} />
        </Grid>
      </Container>
      <BottomAppBar />
    </>
  );
};

export default HomePage;
