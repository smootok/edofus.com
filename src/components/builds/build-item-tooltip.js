import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Divider, Typography, Tooltip } from '@material-ui/core'

import ItemCardBody from '../item/item-card-body'

const useTooltipStyles = makeStyles(theme => ({
  arrow: {
    color: theme.palette.common.black
  },
  tooltip: {
    backgroundColor: theme.palette.common.black
  }
}))

const useStyles = makeStyles(theme => ({
  subtitles: {
    padding: theme.spacing(0.5)
  },
  subtitle1: {
    fontSize: 16
  },
  caption: {
    fontSize: 14,
    color: theme.palette.text.secondary
  },
  actions: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: theme.spacing(1)
  },
  button: {
    backgroundColor: theme.palette.error.main,
    color: theme.palette.common.white,
    '&:hover': {
      backgroundColor: theme.palette.error.dark
    }
  }
}))

const BuildItemTooltipContent = ({ buildItem }) => {
  const { name, level, type, effects } = buildItem
  const classes = useStyles()
  return (
    <>
      <div className={classes.subtitles}>
        <Typography variant='subtitle1' className={classes.subtitle1}>
          {name}
        </Typography>
        <Typography variant='caption' className={classes.caption}>
          {type} - Level {level}
        </Typography>
      </div>
      <Divider />
      <ItemCardBody effects={effects} size='small' />
    </>
  )
}

const BuildItemTooltip = ({
  children,
  buildItem,
  placement,
  config
}) => {
  const classes = useTooltipStyles()
  if (!buildItem) return children
  return (
    <Tooltip
      interactive
      arrow
      placement={placement}
      classes={classes}
      title={
        <BuildItemTooltipContent
          buildItem={buildItem}
          config={config}
        />
      }
    >
      {children}
    </Tooltip>
  )
}

export default BuildItemTooltip
