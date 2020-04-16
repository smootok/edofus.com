import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import {
  Menu as MenuIcon,
  AccountCircle as AccountCircleIcon
} from '@material-ui/icons'

import {
  AppBar,
  IconButton,
  Toolbar,
  Button,
  Typography
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  appBar: {
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    [theme.breakpoints.up('md')]: {
      width: props => `calc(100% - ${props.drawerWidth}px)`,
      marginLeft: props => props.drawerWidth
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
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
          <Button>
            <AccountCircleIcon style={{ marginRight: 4 }} /> Login
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default DrawerAppBar
