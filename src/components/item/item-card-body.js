import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import ItemCardEffect from './item-card-effect'

const useStyles = makeStyles(theme => ({
  root: {
    flex: 1
  }
}))

const ItemCardBody = ({ effects }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      {effects.map((effect, index) => (
        <ItemCardEffect key={index} {...effect} />
      ))}
    </div>
  )
}

export default ItemCardBody
