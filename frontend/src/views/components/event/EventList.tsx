import React, { useEffect } from 'react';
import EventListItem from './EventListItem';
import ErrorMessageAlert from '../error/ErrorMessageAlert';
import { Event } from 'typescript-fetch-api';
import List from '@material-ui/core/List';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  contentDivider: {
    marginBottom: '15px'
  }
});

interface Props {
  title: string;
  type: 'basic' | 'enrollment';
  searchEvent: () => void;
  events: Array<Event>;
  isLoading: boolean;
  error?: Error;
}

/**
 * イベントリスト
 */
const EventList: React.FC<Props> = (props: Props) => {
  const classes = useStyles({});
  const effectFn = () => {
    props.searchEvent();
  };

  useEffect(effectFn, []);

  const renderItems = (events: Array<Event>, error?: Error) => {
    const isExistsError = error !== void 0;
    if (isExistsError)
      return <ErrorMessageAlert messageText="データ取得失敗しました" />;
    return events.map((event: Event, i: number) => {
      if (props.events.length - 1 === i)
        return <EventListItem key={i} event={event} type={props.type} />;
      return (
        <React.Fragment key={i}>
          <EventListItem key={i} event={event} type={props.type} />
          <Divider />
        </React.Fragment>
      );
    });
  };

  return (
    <List>
      <Card>
        <CardHeader title={props.title} />
        <CardContent>
          <Divider className={classes.contentDivider} />
          {renderItems(props.events, props.error)}
        </CardContent>
      </Card>
    </List>
  );
};

export default EventList;
