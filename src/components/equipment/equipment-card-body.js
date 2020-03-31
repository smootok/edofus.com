import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import EquipmentCardEffect from './equipment-card-effect'

const useStyles = makeStyles(theme => ({
  root: {
    flex: 1
  }
}))

const EquipmentCardBody = ({ effects }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      {effects.map((effect, index) => (
        <EquipmentCardEffect key={index} {...effect} />
      ))}
    </div>
  )
}

export default EquipmentCardBody
