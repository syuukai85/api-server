import React, { useEffect } from 'react';
import { Event } from 'typescript-fetch-api';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Loading from '../loading/Loading';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';

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
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  fab: {
    margin: theme.spacing(1),
    width: '200px'
  },
  assignButtonIcon: {
    marginRight: '15px'
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
    <div className={classes.header}>
      <Container>
        <Grid item xs={12}>
          <div className={classes.headerContainer}>
            <img className={classes.eventImage} src={props.event.imageUrl} />
            <Typography variant="h2" gutterBottom>
              {props.event.title}
            </Typography>
            <Fab
              color="primary"
              variant="extended"
              aria-label="delete"
              className={classes.fab}
            >
              <NavigationIcon className={classes.assignButtonIcon} />
              参加
            </Fab>
          </div>
        </Grid>
      </Container>
    </div>
  );
};

export default EventDetail;
