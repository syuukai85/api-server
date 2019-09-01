import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';

const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(2),
    width: '200px',
  },
  assignButtonIcon: {
    marginRight: '15px',
  },
}));

const AssignButton: React.FC = () => {
  const classes = useStyles({});
  return (
    <Fab color="primary" variant="extended" aria-label="delete" className={classes.fab}>
      <NavigationIcon className={classes.assignButtonIcon} />
      参加
    </Fab>
  );
};

export default AssignButton;
