import React, { useState, MouseEvent } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AppBarMenu from './AppBarMenu';

const useStyles = makeStyles({
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  grow: {
    flexGrow: 1,
  },
});

/**
 * 画面下のApp Bar
 */
const BottomAppBar: React.FC = () => {
  const classes = useStyles({});
  const [openMenu, setOpenMenu] = useState(false);
  const [anchorEl, setAnchorEl] = useState();
  const handleClick = (event: MouseEvent<EventTarget & HTMLButtonElement>) => {
    event.preventDefault();
    setAnchorEl(event.currentTarget);
    setOpenMenu(true);
  };
  const handleClose = () => {
    setOpenMenu(false);
  };
  return (
    <AppBar position="sticky" color="primary" className={classes.appBar}>
      <Toolbar>
        <IconButton onClick={handleClick} edge="start" color="inherit" aria-label="Open drawer">
          <MenuIcon />
        </IconButton>
        <AppBarMenu open={openMenu} anchorEl={anchorEl} handleClose={handleClose} />
        <div className={classes.grow} />
        <IconButton color="inherit">
          <SearchIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default BottomAppBar;
