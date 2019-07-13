import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import GoogleButton from 'react-google-button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  googleButton: {
    margin: 'auto'
  },
  title: {
    margin: 'auto'
  }
});

const LoginPage: React.FC = () => {
  const styles = useStyles({});
  const handleClick = () => {
    console.log('click');
  };
  return (
    <Container fixed>
      <Typography className={styles.title} variant="h1">
        Connthass
      </Typography>
      <GoogleButton onClick={handleClick} className={styles.googleButton} />
    </Container>
  );
};

export default LoginPage;
