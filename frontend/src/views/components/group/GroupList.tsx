import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import GroupListItem from './GroupListItem';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
}));

const GroupList: React.FC = () => {
  const classes = useStyles({});
  return (
    <List className={classes.root}>
      <Card>
        <CardHeader title="グループ一覧" />
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
