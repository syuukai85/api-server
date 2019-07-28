import React, { useEffect } from 'react';
import Card from '@material-ui/core/Card';
import { Group } from 'typescript-fetch-api';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import GroupListItem from './GroupListItem';
import Divider from '@material-ui/core/Divider';

interface Props {
  title: string;
  searchGroup: () => void;
  groups: Array<Group>;
  isLoading: boolean;
}

/**
 * グループリスト
 */
const GroupList: React.FC<Props> = (props: Props) => {
  const effectFn = () => {
    props.searchGroup();
  };
  useEffect(effectFn, []);
  return (
    <List>
      <Card>
        <CardHeader title={props.title} />
        <CardContent>
          <Divider />
          {props.groups.map((group: Group, i: number) => {
            if (props.groups.length - 1 === i) {
              return <GroupListItem key={i} group={group} />;
            } else {
              return (
                <>
                  <GroupListItem key={i} group={group} />
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
