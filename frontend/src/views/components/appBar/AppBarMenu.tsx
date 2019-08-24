import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import EventIcon from '@material-ui/icons/Event';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

interface Props {
  open: boolean;
  anchorEl: HTMLButtonElement;
  handleClose: () => void;
}

const AppBarMenu: React.FC<Props> = (props: Props) => {
  const { open, anchorEl, handleClose } = props;
  return (
    <Menu
      id="simple-menu"
      keepMounted
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
    >
      <MenuItem onClick={handleClose}>
        <ListItemIcon>
          <EventIcon />
        </ListItemIcon>
        <ListItemText primary="イベントを作成" />
      </MenuItem>
    </Menu>
  );
};

export default AppBarMenu;
