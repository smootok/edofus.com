import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

import Layout from '../components/layout/layout'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    minHeight: '100vh',
    alignItems: 'center',
    justifyContent: 'center'
  }
}))

const Home = () => {
  const classes = useStyles()

  return (
    <Layout>
      <div className={classes.root}>
        <Typography variant='h2'>Soon!</Typography>
      </div>
    </Layout>
  )
}

export default Home
