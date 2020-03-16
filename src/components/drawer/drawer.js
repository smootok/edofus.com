import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'

import {
  Drawer as DrawerUI,
  Divider,
  Hidden,
  Typography
} from '@material-ui/core'

import DrawerItemList from './drawer-item-list'
import DrawerAppBar from './drawer-app-bar'

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
  const [mobileOpen, setMobileOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState({})

  useEffect(() => {
    if (!currentPage.name) return
    document.title = `edofus - ${currentPage.name}`
  })

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
            setCurrentPage={setCurrentPage}
          />
        </div>
      ))}
    </div>
  )

  return (
    <div className={classes.root}>
      <DrawerAppBar
        drawerWidth={drawerWidth}
        handleDrawerToggle={handleDrawerToggle}
        currentPage={currentPage}
      />
      <nav className={classes.drawer}>
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
