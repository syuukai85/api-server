import React, { useEffect } from 'react';
import { Event } from 'typescript-fetch-api';
import Loading from '../loading/Loading';

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
  if (props.isLoading) return <Loading />;
  return <div>Event Detail</div>;
};

export default EventDetail;
