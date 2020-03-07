import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import {
  ListItemIcon as ItemIcon,
  ListItemText as ItemText,
  ListItem as Item
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  icon: {
    width: 30,
    height: 30
  },
  link: {
    textDecoration: 'none',
    color: 'inherit'
  },
  active: {
    backgroundColor: theme.palette.action.selected,
    color: theme.palette.primary.main
  }
}))

const DrawerItem = ({ name, icon, link }) => {
  const classes = useStyles()
  const { pathname } = useLocation()

  return (
    <Link to={link} className={classes.link}>
      <Item
        key={name}
        className={link === pathname ? classes.active : ''}
        button
      >
        <ItemIcon>
          <img className={classes.icon} src={icon} alt={name} />
        </ItemIcon>
        <ItemText primary={name} />
      </Item>
    </Link>
  )
}

export default DrawerItem
