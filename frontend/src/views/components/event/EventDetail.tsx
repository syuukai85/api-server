import React, { useEffect } from 'react';
import { Event } from 'typescript-fetch-api';
import Loading from '../loading/Loading';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import AssignButton from '../detail/AssignButton';
import DetailHeader from '../detail/DetailHeader';
import RecruitRequirements from './RecruitRequirements';
import Description from '../detail/Description';
import NetworkErrorTemplate from '../error/NetworkErrorTemplate';

interface Props {
  id: string;
  event: Event;
  isLoading: boolean;
  error: Error;
  searchEvent: (eventId: string) => void;
}

const EventDetail: React.FC<Props> = (props: Props) => {
  const effectFn = () => {
    props.searchEvent(props.id);
  };
  useEffect(effectFn, []);
  if (props.isLoading) return <Loading />;
  const isExistsError = props.error !== void 0;
  if (isExistsError) return <NetworkErrorTemplate />;
  return (
    <>
      <DetailHeader
        title={props.event.title}
        colorCode={props.event.colorCode}
        imageUrl={props.event.imageUrl}
      />
      <RecruitRequirements event={props.event} />
      <Description description={props.event.description} />
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

export default EventDetail;
