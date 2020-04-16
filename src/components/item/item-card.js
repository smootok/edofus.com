import React from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Grid, Divider } from '@material-ui/core'

import ItemCardHeader from './item-card-header'
import ItemCardBody from './item-card-body'

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(2, 0),
    display: 'flex',
    flexDirection: 'column',
    color: theme.palette.text.secondary
  },
  paper: {
    cursor: props => (props.builderConfig ? 'pointer' : 'auto'),
    padding: theme.spacing(3, 3),
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

const ItemCard = ({ item }) => {
  const { data: builderConfig } = useLocation()
  const history = useHistory()

  const handleClick = () => {
    if (!builderConfig) return

    history.push({
      pathname: '/builder',
      data: { currentItemBuild: item, builderConfig }
    })
  }

  const classes = useStyles({ builderConfig })
  return (
    <Grid className={classes.root} item xs={12} sm={6} md={6} lg={4} xl={3}>
      <Paper className={classes.paper} onClick={handleClick}>
        <ItemCardHeader {...item} />

        <Divider className={classes.divider} />

        <ItemCardBody {...item} />
      </Paper>
    </Grid>
  )
}

export default ItemCard
