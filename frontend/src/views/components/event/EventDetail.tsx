import React, { useEffect } from 'react';
import { Event } from 'typescript-fetch-api';

interface Props {
  id: string;
  event: Event;
  isLoading: boolean;
  error: Error;
  searchEvent: (eventId: string) => void;
}

const EventDetail: React.FC<Props> = (props: Props) => {
  const effectFn = () => {
    props.searchEvent(props.id);
  };
  useEffect(effectFn, []);
  return <div>Event Detail</div>;
};

export default EventDetail;
