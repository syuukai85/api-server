import React, { useEffect } from 'react';
import Card from '@material-ui/core/Card';
import ErrorMessageAlert from '../error/ErrorMessageAlert';
import { Group } from 'typescript-fetch-api';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import GroupListItem from './GroupListItem';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  contentDivider: {
    marginBottom: '15px'
  }
});

interface Props {
  title: string;
  searchGroup: () => void;
  groups: Array<Group>;
  isLoading: boolean;
  error?: Error;
}

/**
 * グループリスト
 */
const GroupList: React.FC<Props> = (props: Props) => {
  const classes = useStyles({});
  const effectFn = () => {
    props.searchGroup();
  };
  useEffect(effectFn, []);

  const renderItems = (groups: Array<Group>, error?: Error) => {
    const isExistsError = error !== void 0;
    if (isExistsError)
      return <ErrorMessageAlert messageText="データ取得失敗しました" />;
    return groups.map((group: Group, i: number) => {
      if (props.groups.length - 1 === i) {
        return <GroupListItem key={i} group={group} />;
      } else {
        return (
          <React.Fragment key={i}>
            <GroupListItem key={i} group={group} />
            <Divider />
          </React.Fragment>
        );
      }
    });
  };

  return (
    <List>
      <Card>
        <CardHeader title={props.title} />
        <CardContent>
          <Divider className={classes.contentDivider} />
          {renderItems(props.groups, props.error)}
        </CardContent>
      </Card>
    </List>
  );
};

export default GroupList;
