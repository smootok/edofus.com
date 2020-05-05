import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { useCookies } from 'react-cookie'

import {
  Menu as MenuIcon,
  AccountCircle as SignInIcon,
  ExitToApp as SignOutIcon
} from '@material-ui/icons'

import {
  AppBar,
  IconButton,
  Toolbar,
  Button,
  Typography
} from '@material-ui/core'

import useUser from '../../hooks/use-user'

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
  const history = useHistory()
  const [, , removeCookie] = useCookies(['jwt'])
  const { isLoggedIn, removeUser } = useUser()

  const handleSignOut = e => {
    if (!isLoggedIn) return
    removeCookie('jwt')
    removeUser()
    window.localStorage.removeItem('currentBuild')
    history.push({ pathname: '/sign-in' })
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
          {isLoggedIn ? (
            <Button onClick={handleSignOut}>
              <SignOutIcon style={{ marginRight: 4 }} /> Sign out
            </Button>
          ) : (
            <Link to='/sign-in' style={{ textDecoration: 'none' }}>
              <Button>
                <SignInIcon style={{ marginRight: 4 }} /> Sign in
              </Button>
            </Link>
          )}
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default DrawerAppBar
