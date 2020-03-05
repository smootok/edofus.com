import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import EncyclopediaCardEffect from './encyclopedia-card-effect'

const useStyles = makeStyles(theme => ({
  root: {
    flex: 1
  }
}))

const EncyclopediaCardBody = ({ effects }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      {effects.map((effect, index) => (
        <EncyclopediaCardEffect key={index} {...effect} />
      ))}
    </div>
  )
}

export default EncyclopediaCardBody
