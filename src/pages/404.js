import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

import Layout from '../components/layout/layout'

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: '95vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
}))

const PageNotFound = () => {
  const classes = useStyles()

  return (
    <Layout>
      <div className={classes.root}>
        <Typography variant='h2'>404!</Typography>
        <Typography>Page Not Found.</Typography>
      </div>
    </Layout>
  )
}

export default PageNotFound
