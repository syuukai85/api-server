import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Report from '@material-ui/icons/Report';

const useStyles = makeStyles({
  alert: {
    borderRadius: '5px',
    padding: '10px',
  },
  iconContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '5px',
  },
});

interface Props {
  messageText: string;
}

const ErrorMessageAlert: React.FC<Props> = (props: Props) => {
  const classes = useStyles({});
  return (
    <Box className={classes.alert} bgcolor="error.main" color="error.contrastText">
      <Grid container direction="row" alignItems="center">
        <Grid className={classes.iconContainer} item>
          <Report />
        </Grid>
        <Grid item>{props.messageText}</Grid>
      </Grid>
    </Box>
  );
};

export default ErrorMessageAlert;
