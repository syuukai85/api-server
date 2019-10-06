import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Lottie from 'react-lottie';

const loadingJson = require('./loading.json');
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: loadingJson,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};
const useStyles = makeStyles({
  loadingContainer: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

const Loading: React.FC = () => {
  const classes = useStyles({});
  return (
    <div className={classes.loadingContainer}>
      <Lottie options={defaultOptions} height={300} width={300} />
    </div>
  );
};

export default Loading;
