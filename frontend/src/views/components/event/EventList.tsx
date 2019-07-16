import React from 'react';
import EventListItem from './EventListItem';
import List from '@material-ui/core/List';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';

const EventList: React.FC = () => {
  return (
    <List>
      <Card>
        <CardHeader title="イベント一覧" />
        <CardContent>
          <Divider />
          {[1, 2, 3, 1, 2, 3].map((v, i, arr) => {
            if (arr.length - 1 === i) {
              return <EventListItem />;
            } else {
              return (
                <>
                  <EventListItem />
                  <Divider />
                </>
              );
            }
            return <EventListItem />;
          })}
        </CardContent>
      </Card>
    </List>
  );
};

export default EventList;
