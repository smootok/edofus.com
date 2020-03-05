import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Drawer as DrawerUI, Divider } from '@material-ui/core'

import DRAWER_CONFIG from './drawer.config'
import DrawerList from './drawer-list'

const drawerWidth = 240

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    fontWeight: 'bold'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  title: {
    fontSize: '1.8rem',
    textAlign: 'center',
    padding: theme.spacing(1)
  }
}))

const Drawer = () => {
  const classes = useStyles()
  const [selectedItem, setSelectedItem] = useState()
  return (
    <div className={classes.root}>
      <DrawerUI
        className={classes.drawer}
        variant='permanent'
        classes={{ paper: classes.drawerPaper }}
        anchor='left'
      >
        <div className={classes.title}>edofus</div>

        {DRAWER_CONFIG.map(({ title, items }) => (
          <div key={title}>
            <Divider />
            <DrawerList
              title={title}
              items={items}
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
            />
          </div>
        ))}
      </DrawerUI>
    </div>
  )
}

export default Drawer
