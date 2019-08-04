import React, { useEffect } from 'react';
import { Event } from 'typescript-fetch-api';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Loading from '../loading/Loading';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import NavigationIcon from '@material-ui/icons/Navigation';
import Markdown from 'markdown-to-jsx';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';

interface ColorProps {
  backgroundColor: string;
}

const useStyles = makeStyles(theme => ({
  header: (props: ColorProps) => ({
    width: '100%',
    height: '80vh',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: props.backgroundColor
  }),
  eventImage: {
    marginBottom: '50px',
    width: '50%'
  },
  headerContainer: {
    flexDirection: 'column',
    justifyContent: 'center'
  },
  fab: {
    margin: theme.spacing(2),
    width: '200px'
  },
  assignButtonIcon: {
    marginRight: '15px'
  },
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
  console.log(props.event);
  useEffect(effectFn, []);
  if (props.isLoading) return <Loading />;
  return (
    <>
      <div className={classes.header}>
        <Container>
          <Grid item xs={12}>
            <Box textAlign="center" className={classes.headerContainer}>
              <img className={classes.eventImage} src={props.event.imageUrl} />
              <Typography variant="h2">{props.event.title}</Typography>
              <Fab
                color="primary"
                variant="extended"
                aria-label="delete"
                className={classes.fab}
              >
                <NavigationIcon className={classes.assignButtonIcon} />
                参加
              </Fab>
            </Box>
          </Grid>
        </Container>
      </div>
      <Grid item xs={12} className={classes.recruitRequirementsContainer}>
        <Table className={classes.table}>
          <TableBody>
            <TableRow key={1}>
              <TableCell component="th" scope="row">
                募集人数
              </TableCell>
              <TableCell align="right">
                <Typography variant="h5">
                  {props.event.entries !== void 0
                    ? props.event.entries.length
                    : 0}
                  /{props.event.capacity}人
                </Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Grid>
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
            <Fab
              color="primary"
              variant="extended"
              aria-label="delete"
              className={classes.fab}
            >
              <NavigationIcon className={classes.assignButtonIcon} />
              参加
            </Fab>
          </Box>
        </Grid>
      </Container>
    </>
  );
};

export default EventDetail;
