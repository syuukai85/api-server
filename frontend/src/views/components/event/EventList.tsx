import React, { useEffect } from 'react';
import EventListItem from './EventListItem';
import { Event } from 'typescript-fetch-api';
import List from '@material-ui/core/List';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';

interface Props {
  title: string;
  type: 'basic' | 'enrollment';
  searchEvent: () => void;
  events: Array<Event>;
  isLoading: boolean;
}

/**
 * イベントリスト
 */
const EventList: React.FC<Props> = (props: Props) => {
  const effectFn = () => {
    props.searchEvent();
  };
  useEffect(effectFn, []);
  return (
    <List>
      <Card>
        <CardHeader title={props.title} />
        <CardContent>
          <Divider />
          {/* TODO: eventのリストから値を取得する必要があるが、一旦配列は仮置き */}
          {props.events.map((event: Event, i: number) => {
            if (props.events.length - 1 === i) {
              return <EventListItem key={i} event={event} type={props.type} />;
            }
            return (
              <>
                <EventListItem key={i} event={event} type={props.type} />
                <Divider />
              </>
            );
          })}
        </CardContent>
      </Card>
    </List>
  );
};

export default EventList;
