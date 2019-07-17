import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import GroupListItem from './GroupListItem';
import Divider from '@material-ui/core/Divider';

interface Props {
  title: string;
}

const GroupList: React.FC<Props> = (props: Props) => {
  return (
    <List>
      <Card>
        <CardHeader title={props.title} />
        <CardContent>
          <Divider />
          {[1, 2, 3, 4, 1, 2].map((v, i, arr) => {
            if (arr.length - 1 === i) {
              return <GroupListItem />;
            } else {
              return (
                <>
                  <GroupListItem />
                  <Divider />
                </>
              );
            }
          })}
        </CardContent>
      </Card>
    </List>
  );
};

export default GroupList;
