import React from 'react'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import effectsImg from '../../assets/effects.png'
import { effectsConfig } from './item.config'

const effectStyles = (theme, effectsConfig) => {
  const styles = {
    root: {
      display: 'flex'
    },
    negative: {
      color: theme.palette.error.main
    },
    icon: {
      width: 24,
      height: 24,
      background: `transparent url(${effectsImg}) 0 -1387px no-repeat`,
      marginRight: theme.spacing(1)
    }
  }
  for (const key in effectsConfig) {
    for (const effectConfig of effectsConfig[key]) {
      const { name, css } = effectConfig
      styles.icon[`&.${name}`] = {
        backgroundPosition: css.backgroundPosition
      }
    }
  }
  return styles
}

const useStyles = makeStyles(theme => effectStyles(theme, effectsConfig))

const ItemCardEffect = ({ text, name, start }) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <i className={`${classes.icon} ${name}`} />
      <Typography
        className={`${classes.text} ${start < 0 ? `${classes.negative}` : ''}`}
        variant='body1'
      >
        {text}
      </Typography>
    </div>
  )
}

export default ItemCardEffect
