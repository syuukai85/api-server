import React, { useEffect } from 'react';
import { Event } from 'typescript-fetch-api';

interface Props {
  isLoading: boolean;
  error: Error;
  addEvent: (event: Event) => void;
}

const AddEvent: React.FC<Props> = (props: Props) => {
  const effectFn = () => {
    props.addEvent({ title: 'sample' });
  };
  useEffect(effectFn, []);
  return <div>add event</div>;
};

export default AddEvent;
