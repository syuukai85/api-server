import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import { Event } from 'typescript-fetch-api';
import BasicEventListItem from './BasicEventListItem';
import EnrollmentEventListItem from './EnrollmentEventListItem';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  listItem: {
    '&:hover': {
      backgroundColor: '#e1f5fe'
    }
  },
  listLink: { textDecoration: 'none', color: '#212121' }
});

interface Props {
  // 表示の切り替えに利用
  type: 'basic' | 'enrollment';
  event: Event;
}

/**
 * EventListのItem
 * 内部でtypeを親から受け取り分岐を行っているが、標準的に使われる想定のComponent(Basic)とは別に
 * 今回お布施として投げ銭から受け取る実装も追加しているため、切り替えをtypeを利用して分岐
 */
const EventListItem: React.FC<Props> = (props: Props) => {
  const classes = useStyles({});
  return (
    <Link to={`/events/${props.event.id}`} className={classes.listLink}>
      <ListItem className={classes.listItem}>
        {props.type === 'basic' && <BasicEventListItem event={props.event} />}
        {props.type === 'enrollment' && (
          <EnrollmentEventListItem event={props.event} />
        )}
      </ListItem>
    </Link>
  );
};

export default EventListItem;
