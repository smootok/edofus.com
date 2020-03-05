import React from 'react'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import caracs from '../../assets/caracs.png'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  negative: {
    color: theme.palette.error.main
  },
  caracs: {
    width: 24,
    height: 24,
    background: `transparent url(${caracs}) 0 -1387px no-repeat`,
    marginRight: theme.spacing(1),
    '&.default, &.pods': {
      backgroundPosition: '5px -1367px'
    },
    '&.neutral-damage, &.neutral-steal, &.neutral-resistance': {
      backgroundPosition: '0 0'
    },
    '&.vitality': {
      backgroundPosition: '0 -304px'
    },
    '&.fire-damage, &.fire-steal, &.intelligence, &.fire-resistance': {
      backgroundPosition: '0 -379px'
    },
    '&.earth-damage, &.earth-steal, &.strength, &.earth-resistance': {
      backgroundPosition: '0 -417px'
    },
    '&.water-damage, &.water-steal, &.water-resistance, &.chance': {
      backgroundPosition: '0 -74px'
    },
    '&.air-damage, &.air-steal, &.air-resistance, &.agility': {
      backgroundPosition: '0 -152px'
    },
    '&.healing-done': {
      backgroundPosition: '0 -903px'
    },
    '&.wisdom': {
      backgroundPosition: '0 -343px'
    },
    '&.power': {
      backgroundPosition: '0 -1094px'
    },
    '&.critical': {
      backgroundPosition: '0 -574px'
    },
    '&.ap': {
      backgroundPosition: '0 -228px'
    },
    '&.mp': {
      backgroundPosition: '0 -37px'
    },
    '&.range': {
      backgroundPosition: '0 -113px'
    },
    '&.summons': {
      backgroundPosition: '0 -493px'
    },
    '&.damage': {
      backgroundPosition: '0 -1141px'
    },
    '&.spell-dmg, &.weapon-dmg, &.melee-dmg, &.distance-dmg, &.ranged-dmg': {
      backgroundPosition: '0 -615px'
    },
    '&.spell-damage, &.weapon-damage, &.melee-damage, &.distance-damage, &.ranged-damage': {
      backgroundPosition: '0 -615px'
    },
    '&.spell-resistance, &.weapon-resistance, &.melee-resistance, &.distance-resistance, &.ranged-resistance': {
      backgroundPosition: '0 -1407px'
    },
    '&.heals': {
      backgroundPosition: '0 -951px'
    },
    '&.prospecting': {
      backgroundPosition: '0 -264px'
    },
    '&.initiative': {
      backgroundPosition: '0 -190px'
    },
    '&.lock': {
      backgroundPosition: '0 -531px'
    },
    '&.dodge': {
      backgroundPosition: '0 -452px'
    },
    '&.ap-reduction': {
      backgroundPosition: '0 -1282px'
    },
    '&.mp-reduction': {
      backgroundPosition: '0 -1325px'
    },
    '&.ap-resistance, &.ap-parry': {
      backgroundPosition: '0 -1049px'
    },
    '&.mp-resistance, &.mp-parry': {
      backgroundPosition: '0 -1001px'
    },
    '&.critical-damage': {
      backgroundPosition: '0 -1234px'
    },
    '&.pushback-damage': {
      backgroundPosition: '0 -858px'
    },
    '&.critical-resistance': {
      backgroundPosition: '0 -1185px'
    },
    '&.pushback-resistance': {
      backgroundPosition: '0 -817px'
    },
    '&.trap-power': {
      backgroundPosition: '0 -658px'
    },
    '&.trap-damage': {
      backgroundPosition: '0 -697px'
    }
  }
}))

const EncyclopediaCardEffect = ({ text, name, start }) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <i className={`${classes.caracs} ${name}`} />
      <Typography
        className={`${classes.text} ${start < 0 ? `${classes.negative}` : ''}`}
        variant='body1'
      >
        {text}
      </Typography>
    </div>
  )
}

export default EncyclopediaCardEffect
