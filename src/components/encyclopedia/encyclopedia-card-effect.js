import React from 'react'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import caracs from '../../assets/caracs.png'
import effects from '../../utils/encyclopedia-effects'

const effectStyles = (theme, effects) => {
  const styles = {
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
      marginRight: theme.spacing(1)
    }
  }
  for (const key in effects) {
    for (const effect of effects[key]) {
      const { name, css } = effect
      styles.caracs[`&.${name}`] = { backgroundPosition: css.backgroundPosition }
    }
  }
  return styles
}

const useStyles = makeStyles(theme => effectStyles(theme, effects))

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
