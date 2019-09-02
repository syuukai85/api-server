import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles(theme => ({
  close: {
    padding: theme.spacing(0.5),
  },
}));

interface Props {
  open: boolean;
  message: string;
  handleClose: () => void;
}

const Notification: React.FC<Props> = (props: Props) => {
  const classes = useStyles({});
  const { open, message, handleClose } = props;
  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      ContentProps={{
        'aria-describedby': 'snackbar-message',
      }}
      message={<span id="snackbar-message">{message}</span>}
      action={[
        <IconButton key="close" aria-label="close" color="inherit" className={classes.close} onClick={handleClose}>
          <CloseIcon />
        </IconButton>,
      ]}
    />
  );
};

export default Notification;
