import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'

import ENCYCLOPEDIA_DATA from '../../assets/equipment.json'
import EncyclopediaCard from './encyclopedia-card'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing(6, 0)
  }
}))

const EncyclopediaCardList = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid container spacing={6}>
        {ENCYCLOPEDIA_DATA.slice(0, 300).map(item => (
          <EncyclopediaCard key={item.id} {...item} />
        ))}
      </Grid>
    </div>
  )
}

export default EncyclopediaCardList
