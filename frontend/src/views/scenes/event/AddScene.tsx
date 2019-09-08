import React from 'react';
import AddEventFormContainer from '../../containers/event/AddEventFormContainer';
import NotificationContainer from '../../containers/notification/NotificationContainer';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    marginTop: '20px',
    marginBottom: '20px',
  },
});

const AddEventScene: React.FC = () => {
  const classes = useStyles({});
  return (
    <Container className={classes.container}>
      <AddEventFormContainer />
      <NotificationContainer />
    </Container>
  );
};

export default AddEventScene;
