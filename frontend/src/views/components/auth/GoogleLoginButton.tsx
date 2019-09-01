import React from 'react';
import ReactGoogleButton from 'react-google-button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  googleButton: {
    margin: 'auto',
  },
});

interface Props {
  onClick: () => void;
}

const GoogleLoginButton: React.FC<Props> = (props: Props) => {
  const styles = useStyles({});
  return <ReactGoogleButton onClick={props.onClick} className={styles.googleButton} />;
};

export default GoogleLoginButton;
