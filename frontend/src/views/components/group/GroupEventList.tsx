import React from 'react';
import EventListItem from '../event/EventListItem';
import { Event } from 'typescript-fetch-api';
import List from '@material-ui/core/List';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  contentDivider: {
    marginBottom: '15px',
  },
});

interface Props {
  title: string;
  events: Array<Event>;
}

const GroupEventList: React.FC<Props> = (props: Props) => {
  const classes = useStyles({});
  const renderItems = (events: Array<Event>) => {
    return events.map((event: Event, i: number) => {
      if (props.events.length - 1 === i) return <EventListItem key={i} event={event} type="basic" />;
      return (
        <>
          <EventListItem key={i} event={event} type="basic" />
          <Divider />
        </>
      );
    });
  };

  return (
    <List>
      <Card>
        <CardHeader title={props.title} />
        <CardContent>
          <Divider className={classes.contentDivider} />
          {renderItems(props.events)}
        </CardContent>
      </Card>
    </List>
  );
};

export default GroupEventList;
