import React from 'react';
import EventListItem from './EventListItem';
import List from '@material-ui/core/List';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';

interface Props {
  title: string;
  type: 'basic' | 'enrollment';
}

const EventList: React.FC<Props> = (props: Props) => {
  return (
    <List>
      <Card>
        <CardHeader title={props.title} />
        <CardContent>
          <Divider />
          {/* TODO: eventのリストから値を取得する必要があるが、一旦配列は仮置き */}
          {[1, 2, 3, 4, 5].map((_, i, arr) => {
            if (arr.length - 1 === i) {
              return <EventListItem type={props.type} />;
            }
            return (
              <>
                <EventListItem type={props.type} />
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
