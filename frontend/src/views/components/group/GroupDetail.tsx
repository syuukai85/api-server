import React, { useEffect } from 'react';
import { Group, Event } from 'typescript-fetch-api';
import NetworkErrorTemplate from '../error/NetworkErrorTemplate';
import Loading from '../loading/Loading';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import GroupEventList from './GroupEventList';
import AssignButton from '../detail/AssignButton';
import DetailHeader from '../detail/DetailHeader';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  eventListContainer: {
    marginTop: '20px'
  }
});

interface Props {
  id: string;
  group: Group;
  events: Array<Event>;
  isLoading: boolean;
  error: Error;
  searchGroup: (groupId: string) => void;
  searchGroupEvents: (groupId: string) => void;
}

const GroupDetail: React.FC<Props> = (props: Props) => {
  const classes = useStyles({});
  const effectFn = () => {
    props.searchGroup(props.id);
    props.searchGroupEvents(props.id);
  };
  useEffect(effectFn, []);
  if (props.isLoading) return <Loading />;
  const isExistsError = props.error !== void 0;
  if (isExistsError) return <NetworkErrorTemplate />;
  return (
    <>
      <DetailHeader
        title={props.group.name === void 0 ? '' : props.group.name}
        colorCode={props.group.colorCode}
        imageUrl={props.group.imageUrl}
      />
      <Container>
        <Grid item xs={12}>
          <Box className={classes.eventListContainer} textAlign="center">
            <GroupEventList title="開催イベント" events={props.events} />
          </Box>
          <Box textAlign="center">
            <AssignButton />
          </Box>
        </Grid>
      </Container>
    </>
  );
};

export default GroupDetail;
