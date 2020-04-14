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

const ItemCardEffect = ({ text, name, start, size }) => {
  const classes = useStyles({ size })
  const generateIconClassName = name => {
    if (!name) {
      return ''
    }
    if (name.includes('(')) {
      return `${classes.icon} ${name.replace(/[()]/g, '')}`
    } else {
      return `${classes.icon} ${name}`
    }
  }
  const iconClassName = generateIconClassName(name)

  return (
    <div className={classes.root}>
      <i className={iconClassName} />
      <Typography
        className={`${classes.text} ${start < 0 ? `${classes.negative}` : ''}`}
        variant={size === 'small' ? 'body2' : 'body1'}
      >
        {text}
      </Typography>
    </div>
  )
}

export default ItemCardEffect
