import React, { useEffect } from 'react';
import { Group, Event } from 'typescript-fetch-api';

interface Props {
  id: string;
  group: Group;
  events: Array<Event>;
  isLoading: boolean;
  error: Error;
  searchGroup: (groupId: string) => void;
  searchGroupEvents: (groupId: string) => void;
}

const GroupDetail: React.FC<Props> = (props: Props) => {
  const effectFn = () => {
    props.searchGroup(props.id);
    props.searchGroupEvents(props.id);
  };
  useEffect(effectFn, []);
  return (
    <>
      <div>group detail</div>
    </>
  );
};

export default GroupDetail;
