import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

import Layout from '../components/layout/layout'
import EncyclopediaSearch from '../components/encyclopedia/encyclopedia-search'
import EncyclopediaCardList from '../components/encyclopedia/encyclopedia-card-list'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  }
}))

const Encyclopedia = () => {
  const classes = useStyles()

  return (
    <Layout>
      <div className={classes.root}>
        <EncyclopediaSearch />
        <EncyclopediaCardList />
      </div>
    </Layout>
  )
}

export default Encyclopedia
