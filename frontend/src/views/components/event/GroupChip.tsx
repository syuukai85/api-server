import React from 'react';
import { Group } from 'typescript-fetch-api';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';

interface Props {
  group?: Group;
}

const GroupChip: React.FC<Props> = (props: Props) => {
  if (props.group === void 0) return <></>;
  return (
    <Chip
      avatar={<Avatar src={props.group.imageUrl} />}
      label={props.group.name}
    />
  );
};

export default GroupChip;
