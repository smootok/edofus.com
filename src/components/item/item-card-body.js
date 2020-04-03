import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import ItemCardEffect from './item-card-effect'
import { Typography, Divider } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    flex: 1
  },
  divider: {
    margin: 10
  },
  characteristics: {
    color: theme.palette.text.secondary
  },
  conditions: {
    color: theme.palette.text.secondary
  }
}))

const ItemCardBody = ({ effects, characteristics, conditions }) => {
  const classes = useStyles()

  const groupEffects = effects => {
    const weaponEffects = []
    const otherEffects = []
    for (const effect of effects) {
      if (effect.name && effect.name.includes('(')) {
        weaponEffects.push(effect)
      } else {
        otherEffects.push(effect)
      }
    }
    return { weaponEffects, otherEffects }
  }

  const { weaponEffects, otherEffects } = groupEffects(effects)

  return (
    <div className={classes.root}>
      <div className={classes.effects}>
        {weaponEffects.map((effect, index) => (
          <ItemCardEffect key={index} {...effect} />
        ))}
        {weaponEffects.length > 0 && <Divider className={classes.divider} />}
        {otherEffects.map((effect, index) => (
          <ItemCardEffect key={index} {...effect} />
        ))}
      </div>

      {characteristics && characteristics.length > 0 && (
        <>
          <Divider className={classes.divider} />
          <Typography className={classes.characteristics}>
            {characteristics.join(', ')}
          </Typography>
        </>
      )}

      {conditions && (
        <>
          <Divider className={classes.divider} />
          <Typography className={classes.conditions}>{conditions}</Typography>
        </>
      )}
    </div>
  )
}

export default ItemCardBody
