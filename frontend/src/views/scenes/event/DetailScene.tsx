import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import BottomAppBar from '../../components/appBar/BottomAppBar';

const EventDetailScene: React.FC = () => {
  return (
    <>
      <Container>
        <Grid container spacing={3}>
          <p>Event Detail</p>
        </Grid>
      </Container>
      <BottomAppBar />
    </>
  );
};

export default EventDetailScene;
