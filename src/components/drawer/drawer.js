import React, { useState } from 'react'
import { Menu as MenuIcon } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'
import {
  Drawer as DrawerUI,
  AppBar,
  Divider,
  Hidden,
  IconButton,
  Toolbar,
  Typography
} from '@material-ui/core'

import DrawerItemList from './drawer-item-list'

const drawerWidth = 240

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  },
  toolbar: {
    ...theme.mixins.toolbar,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  drawerPaper: {
    width: drawerWidth
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold'
  }
}))

const Drawer = ({ config }) => {
  const classes = useStyles()

  const [mobileOpen, setMobileOpen] = React.useState(false)
  const [selectedItem, setSelectedItem] = useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <div>
      <div className={classes.toolbar}>
        <Typography className={classes.title} variant='h2'>
          edofus
        </Typography>
      </div>

      <Divider />

      {config.map(({ title, items }) => (
        <div key={title}>
          <Divider />
          <DrawerItemList
            title={title}
            items={items}
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
          />
        </div>
      ))}
    </div>
  )

  return (
    <div className={classes.root}>
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
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label='mailbox folders'>
        <Hidden smUp implementation='css'>
          <DrawerUI
            variant='temporary'
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true
            }}
          >
            {drawer}
          </DrawerUI>
        </Hidden>
        <Hidden xsDown implementation='css'>
          <DrawerUI
            classes={{
              paper: classes.drawerPaper
            }}
            variant='permanent'
            open
          >
            {drawer}
          </DrawerUI>
        </Hidden>
      </nav>
    </div>
  )
}

export default Drawer
