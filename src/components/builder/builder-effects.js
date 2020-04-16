import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import effectsImg from '../../assets/effects.png'
import { effectsConfig } from '../item/item.config'

const builderEffectsStyles = (theme, effectsConfig) => {
  const styles = {
    root: {
      maxWidth: 300,
      maxHeight: '80vh',
      overflow: 'scroll',
      borderRadius: 10,
      border: `1px solid ${theme.palette.divider}`,
      margin: 'auto'
    },
    section: {
      marginBottom: theme.spacing(3)
    },
    category: {
      fontWeight: 500,
      fontSize: '1.2em',
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
      padding: theme.spacing(1),
      borderRadius: '10px 10px 0 0'
    },
    effect: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: theme.spacing(1, 1),
      '&:nth-child(even)': {
        backgroundColor: theme.palette.background.paper
      }
    },
    left: {
      display: 'flex'
    },
    icon: {
      width: 24,
      height: 24,
      background: `transparent url(${effectsImg}) 0 -1387px no-repeat`,
      marginRight: theme.spacing(1)
    },
    value: {
      fontWeight: 700,
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

const useStyles = makeStyles(theme =>
  builderEffectsStyles(theme, effectsConfig)
)

const BuilderEffects = ({ effects }) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      {Object.keys(effectsConfig).map(key => (
        <div className={classes.section} key={key}>
          <div className={classes.category}>{key}</div>
          {effectsConfig[key].map(effect => (
            <div className={classes.effect} key={effect.name}>
              <div className={classes.left}>
                <i className={`${classes.icon} ${effect.name}`} />
                <div className={classes.name}>{effect.text}</div>
              </div>
              <div className={classes.right}>
                <div className={classes.value}>
                  {effects[effect.name] || 0}{effect.name.includes('percentage') && '%'}
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default BuilderEffects
