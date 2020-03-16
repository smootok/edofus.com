import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'

import {
  Menu as MenuIcon,
  AccountCircle as AccountCircleIcon,
  Language as LanguageIcon,
  ExpandMore as ExpandMoreIcon
} from '@material-ui/icons'

import {
  AppBar,
  IconButton,
  Toolbar,
  Button,
  Menu,
  MenuItem,
  Typography
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  appBar: {
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    [theme.breakpoints.up('sm')]: {
      width: props => `calc(100% - ${props.drawerWidth}px)`,
      marginLeft: props => props.drawerWidth
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  },
  rightMenu: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'flex-end'
  }
}))

const DrawerAppBar = ({ handleDrawerToggle, drawerWidth, currentPage }) => {
  const classes = useStyles({ drawerWidth })
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <AppBar position='fixed' className={classes.appBar}>
      <Toolbar>
        <IconButton
          color='inherit'
          aria-label='open drawer'
          edge='start'
          onClick={handleDrawerToggle}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant='h6' noWrap>
          {currentPage.name}
        </Typography>
        <div className={classes.rightMenu}>
          <div>
            <Button
              aria-controls='simple-menu'
              aria-haspopup='true'
              onClick={handleClick}
            >
              <LanguageIcon style={{ marginRight: 4 }} /> English
              <ExpandMoreIcon />
            </Button>
            <Menu
              id='simple-menu'
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>English</MenuItem>
              <MenuItem onClick={handleClose}>Français</MenuItem>
            </Menu>
          </div>
          <Button>
            <AccountCircleIcon style={{ marginRight: 4 }} /> Login
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default DrawerAppBar
