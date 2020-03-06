import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  ListItemIcon as ItemIcon,
  ListItemText as ItemText,
  ListItem as Item
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  active: {
    backgroundColor: theme.palette.action.selected,
    color: theme.palette.primary.main
  }
}))

const DrawerItem = ({ name, icon, selectedItem, setSelectedItem }) => {
  const classes = useStyles()
  return (
    <Item
      className={selectedItem === name ? classes.active : ''}
      button
      key={name}
      onClick={() => setSelectedItem(name)}
    >
      <ItemIcon>
        <img style={{ width: '34px', height: '34px' }} src={icon} alt={name} />
      </ItemIcon>
      <ItemText primary={name} />
    </Item>
  )
}

export default DrawerItem
