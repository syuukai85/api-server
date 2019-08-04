import React, { useEffect } from 'react';
import { Event } from 'typescript-fetch-api';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Loading from '../../loading/Loading';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Markdown from 'markdown-to-jsx';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import AssignButton from './AssignButton';
import EventHeader from './EventHeader';
import RecruitRequirements from './RecruitRequirements';

const useStyles = makeStyles(theme => ({
  recruitRequirementsContainer: {
    display: 'flex',
    justifyContent: 'center'
  },
  table: {
    width: '60%',
    marginTop: '15px'
  },
  descriptionPaper: {
    padding: theme.spacing(3, 2),
    margin: theme.spacing(3, 2)
  }
}));

interface Props {
  id: string;
  event: Event;
  isLoading: boolean;
  error: Error;
  searchEvent: (eventId: string) => void;
}

const EventDetail: React.FC<Props> = (props: Props) => {
  const bgColor =
    props.event.colorCode !== void 0 ? props.event.colorCode : '#000';
  const classes = useStyles({ backgroundColor: bgColor });
  const effectFn = () => {
    props.searchEvent(props.id);
  };
  useEffect(effectFn, []);
  if (props.isLoading) return <Loading />;
  return (
    <>
      <EventHeader event={props.event} />
      <RecruitRequirements event={props.event} />
      <Container>
        <Grid item xs={12}>
          <Paper className={classes.descriptionPaper}>
            <Typography variant="h5">説明</Typography>
            <Markdown>{props.event.description}</Markdown>
          </Paper>
        </Grid>
      </Container>
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
