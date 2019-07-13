import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import GoogleButtonContainer from '../../containers/auth/GoogleLoginContainer';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  title: {
    margin: 'auto'
  }
});

const LoginPage: React.FC = () => {
  const styles = useStyles({});
  return (
    <Container fixed>
      <Typography className={styles.title} variant="h1">
        Connthass
      </Typography>
      <GoogleButtonContainer />
    </Container>
  );
};

export default LoginPage;
