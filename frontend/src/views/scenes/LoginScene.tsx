import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import GoogleLoginButtonContainer from '../containers/auth/GoogleLoginButtonContainer';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  title: {
    margin: 'auto'
  }
});

const LoginScene: React.FC = () => {
  const styles = useStyles({});
  return (
    <Container fixed>
      <Typography className={styles.title} variant="h1">
        Connthass
      </Typography>
      <GoogleLoginButtonContainer />
    </Container>
  );
};

export default LoginScene;
