import React from 'react';
import { Event } from 'typescript-fetch-api';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import AssignButton from './AssignButton';

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
  }
}));

interface Props {
  event: Event;
}

const DetailHeader: React.FC<Props> = (props: Props) => {
  const bgColor =
    props.event.colorCode !== void 0 ? props.event.colorCode : '#000';
  const classes = useStyles({ backgroundColor: bgColor });
  return (
    <div className={classes.header}>
      <Container>
        <Grid item xs={12}>
          <Box textAlign="center" className={classes.headerContainer}>
            <img className={classes.eventImage} src={props.event.imageUrl} />
            <Typography variant="h2">{props.event.title}</Typography>
            <AssignButton />
          </Box>
        </Grid>
      </Container>
    </div>
  );
};

export default DetailHeader;
