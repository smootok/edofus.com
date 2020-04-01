import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Grid, Divider } from '@material-ui/core'

import ItemCardHeader from './item-card-header'
import ItemCardBody from './item-card-body'
import ItemCardFooter from './item-card-footer'

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(2, 0),
    display: 'flex',
    flexDirection: 'column',
    color: theme.palette.text.secondary
  },
  paper: {
    padding: theme.spacing(2, 4),
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
    border: '1px solid transparent',
    borderRadius: 10,
    transition: 'border 0.5s',
    '&:hover': {
      borderColor: theme.palette.primary.main
    }
  },
  divider: {
    margin: theme.spacing(2, 0)
  }
}))

const ItemCard = ({ itemId, name, type, level, effects }) => {
  const classes = useStyles()

  return (
    <Grid className={classes.root} item xs={12} sm={12} md={6} lg={4} xl={3}>
      <Paper className={classes.paper}>
        <ItemCardHeader itemId={itemId} name={name} type={type} level={level} />

        <Divider className={classes.divider} />

        <ItemCardBody effects={effects} />

        <Divider className={classes.divider} />

        <ItemCardFooter />
      </Paper>
    </Grid>
  )
}

export default ItemCard
