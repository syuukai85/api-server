import React from 'react';
import AddEventContainer from '../../containers/event/AddEventContainer';
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
      <AddEventContainer />
    </Container>
  );
};

export default AddEventScene;
