import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

import Drawer from '../drawer/drawer'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  content: {
    flexGrow: 1,
    paddingLeft: theme.spacing(3, 0)
  }
}))

const Layout = ({ children }) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Drawer />
      <main className={classes.content}>{children}</main>
    </div>
  )
}

export default Layout
