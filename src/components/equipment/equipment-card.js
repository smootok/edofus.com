import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Grid, Divider } from '@material-ui/core'

import EquipmentCardHeader from './equipment-card-header'
import EquipmentCardBody from './equipment-card-body'
import EquipmentCardFooter from './equipment-card-footer'

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

const EquipmentCard = ({ itemId, name, type, level, effects }) => {
  const classes = useStyles()

  return (
    <Grid className={classes.root} item xs={12} sm={12} md={6} lg={4} xl={3}>
      <Paper className={classes.paper}>
        <EquipmentCardHeader
          itemId={itemId}
          name={name}
          type={type}
          level={level}
        />

        <Divider className={classes.divider} />

        <EquipmentCardBody effects={effects} />

        <Divider className={classes.divider} />

        <EquipmentCardFooter />
      </Paper>
    </Grid>
  )
}

export default EquipmentCard
