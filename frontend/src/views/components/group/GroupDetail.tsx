import React, { useEffect } from 'react';
import { Group } from 'typescript-fetch-api';
import NetworkErrorTemplate from '../error/NetworkErrorTemplate';
import Loading from '../loading/Loading';

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
  if (props.isLoading) return <Loading />;
  const isExistsError = props.error !== void 0;
  if (isExistsError) return <NetworkErrorTemplate />;
  return (
    <>
      <div>group detail</div>
    </>
  );
};

export default GroupDetail;
