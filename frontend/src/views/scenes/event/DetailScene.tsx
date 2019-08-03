import React from 'react';
import Container from '@material-ui/core/Container';
import BottomAppBar from '../../components/appBar/BottomAppBar';
import EventDetailContainer from '../../containers/event/EventDetailContainer';

const EventDetailScene: React.FC = () => {
  return (
    <>
      <Container>
        <EventDetailContainer />
      </Container>
      <BottomAppBar />
    </>
  );
};

export default EventDetailScene;
