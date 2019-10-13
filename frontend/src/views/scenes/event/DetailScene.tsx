import React from 'react';
import EventDetailContainer from '../../containers/event/EventDetailContainer';
import NotificationContainer from '../../containers/notification/NotificationContainer';

const EventDetailScene: React.FC = () => {
  return (
    <>
      <EventDetailContainer />
      <NotificationContainer />
    </>
  );
};

export default EventDetailScene;
