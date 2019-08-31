import React from 'react';
import { User } from 'typescript-fetch-api';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';

interface Props {
  organizers?: Array<User>;
}

const OrganizerChips: React.FC<Props> = (props: Props) => {
  if (props.organizers === void 0) return <></>;
  return (
    <div>
      {props.organizers.map((organizer: User) => (
        <Chip
          key={organizer.id}
          // NOTE: now, not created user icon.
          avatar={<Avatar>C</Avatar>}
          label={organizer.name}
        />
      ))}
    </div>
  );
};

export default OrganizerChips;
