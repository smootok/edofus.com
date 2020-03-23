import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

import { imagesBaseUrl } from '../../config'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    minHeight: 100
  },
  imageBox: {
    height: 75,
    width: 75,
    '& img': {
      width: '100%'
    }
  },
  subtitle1: {
    fontSize: 20,
    margin: theme.spacing(1, 0)
  },
  caption: {
    fontSize: 16,
    margin: theme.spacing(1, 0),
    color: theme.palette.text.secondary
  }
}))

const EncyclopediaCardHeader = ({ itemId, name, type, level, encyclopediaType }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.subtitles}>
        <Typography variant='subtitle1' className={classes.subtitle1}>
          {name}
        </Typography>
        <Typography variant='caption' className={classes.caption}>
          {type} - Level {level}
        </Typography>
      </div>
      <div className={classes.imageBox}>
        <img
          src={`${imagesBaseUrl}/${encyclopediaType}/${itemId}.png`}
          alt='img'
        />
      </div>
    </div>
  )
}

export default EncyclopediaCardHeader
