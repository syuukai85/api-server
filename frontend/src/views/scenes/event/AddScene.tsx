import React from 'react';
import AddEventFormContainer from '../../containers/event/AddEventFormContainer';
import NotificationContainer from '../../containers/notification/NotificationContainer';
import Container from '@material-ui/core/Container';
import BottomAppBar from '../../components/appBar/BottomAppBar';
import HomeIcon from '@material-ui/icons/Home';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    marginTop: '20px',
    marginBottom: '20px'
  }
});

const menus = [{ icon: <HomeIcon />, text: 'ホームへ戻る', link: '/' }];

const AddEventScene: React.FC = () => {
  const classes = useStyles({});
  return (
    <>
      <Container className={classes.container}>
        <AddEventFormContainer />
        <NotificationContainer />
      </Container>
      <BottomAppBar menus={menus} />
    </>
  );
};

export default AddEventScene;
