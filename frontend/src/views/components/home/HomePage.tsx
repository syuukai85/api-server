import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import EventList from '../event/EventList';
import BottomAppBar from '../appBar/BottomAppBar';
import GroupList from '../group/GroupList';

const HomePage: React.FC = () => {
  return (
    <>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={8}>
            <EventList title="新着イベント一覧(最新5件)" type="basic" />
          </Grid>
          <Grid item xs={12} sm={4}>
            <GroupList />
            <EventList title="お布施" type="enrollment" />
          </Grid>
        </Grid>
      </Container>
      <BottomAppBar />
    </>
  );
};

export default HomePage;
