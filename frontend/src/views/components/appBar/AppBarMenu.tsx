import React from 'react'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
  listLink: { textDecoration: 'none', color: '#212121' }
})

type Menu = {
  icon: JSX.Element
  text: string
  link: string
}

interface Props {
  open: boolean
  anchorEl: HTMLButtonElement
  handleClose: () => void
  menus: Menu[]
}

const AppBarMenu: React.FC<Props> = (props: Props) => {
  const classes = useStyles({})
  const { open, anchorEl, handleClose } = props
  const renderMenus = props.menus.map((menu, key) => {
    return (
      <Link key={key} to={menu.link} className={classes.listLink}>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>{menu.icon}</ListItemIcon>
          <ListItemText primary={menu.text} />
        </MenuItem>
      </Link>
    )
  })
  return (
    <Menu id="simple-menu" keepMounted anchorEl={anchorEl} open={open} onClose={handleClose}>
      {renderMenus}
    </Menu>
  )
}

export default AppBarMenu
