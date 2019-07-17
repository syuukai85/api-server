import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import BasicEventListItem from './BasicEventListItem';
import EnrollmentEventListItem from './EnrollmentEventListItem';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  listItem: {
    '&:hover': {
      backgroundColor: '#e1f5fe'
    }
  }
});

interface Props {
  type: 'basic' | 'enrollment';
}

const EventListItem: React.FC<Props> = (props: Props) => {
  const classes = useStyles({});
  return (
    <ListItem className={classes.listItem}>
      {props.type === 'basic' && <BasicEventListItem />}
      {props.type === 'enrollment' && <EnrollmentEventListItem />}
    </ListItem>
  );
};

export default EventListItem;
