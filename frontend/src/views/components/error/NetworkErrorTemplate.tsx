import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Lottie from 'react-lottie';

const networkErrorJson = require('./network-error.json');
const defaultOptions = {
  loop: false,
  autoplay: true,
  animationData: networkErrorJson,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};
const useStyles = makeStyles({
  networkErrorContainer: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

const NetworkErrorTemplate: React.FC = () => {
  const classes = useStyles({});
  return (
    <div className={classes.networkErrorContainer}>
      <Lottie options={defaultOptions} height={380} width={600} />
    </div>
  );
};

export default NetworkErrorTemplate;
