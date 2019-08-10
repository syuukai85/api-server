import React from 'react';
import Container from '@material-ui/core/Container';
import EventDetailContainer from '../../containers/event/EventDetailContainer';

const EventDetailScene: React.FC = () => {
  return (
    <>
      <Container>
        <EventDetailContainer />
      </Container>
    </>
  );
};

export default EventDetailScene;
