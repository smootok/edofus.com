import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { ListItemIcon, ListItemText, ListItem } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  active: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    color: theme.palette.primary.main
  }
}))

const DrawerItem = ({ name, icon, selectedItem, setSelectedItem }) => {
  const classes = useStyles()
  return (
    <ListItem
      className={selectedItem === name ? classes.active : ''}
      button
      key={name}
      onClick={() => setSelectedItem(name)}
    >
      <ListItemIcon>
        <img style={{ width: '34px', height: '34px' }} src={icon} alt={name} />
      </ListItemIcon>
      <ListItemText primary={name} />
    </ListItem>
  )
}

export default DrawerItem
