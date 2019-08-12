import React, { useEffect } from 'react';
import { Group } from 'typescript-fetch-api';
import NetworkErrorTemplate from '../error/NetworkErrorTemplate';
import Loading from '../loading/Loading';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import AssignButton from '../detail/AssignButton';
import DetailHeader from '../detail/DetailHeader';

interface Props {
  id: string;
  group: Group;
  isLoading: boolean;
  error: Error;
  searchGroup: (groupId: string) => void;
}

const GroupDetail: React.FC<Props> = (props: Props) => {
  const effectFn = () => {
    props.searchGroup(props.id);
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
        imageUrl={props.group.imagePath}
      />
      <Container>
        <Grid item xs={12}>
          <Box textAlign="center">
            <AssignButton />
          </Box>
        </Grid>
      </Container>
    </>
  );
};

export default GroupDetail;
