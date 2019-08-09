import React, { useEffect } from 'react';
import { Group } from 'typescript-fetch-api';

interface Props {
  id: string;
  group: Group;
  isLoading: boolean;
  error: Error;
  searchGroup: (groupId: string) => void;
}

const GroupDetail: React.FC<Props> = (props: Props) => {
  const effectFn = () => {
    props.searchGroup(props.id);
  };
  useEffect(effectFn, []);
  return (
    <>
      <div>group detail</div>
    </>
  );
};

export default GroupDetail;
