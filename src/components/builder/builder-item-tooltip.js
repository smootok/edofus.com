import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button, Divider, Typography, Tooltip } from '@material-ui/core'
import { Delete as DeleteIcon } from '@material-ui/icons'

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

const BuilderItemTooltipContent = ({
  currentItemBuild,
  config,
  handleItemDelete
}) => {
  const { name, level, type, effects } = currentItemBuild
  const classes = useStyles()
  return (
    <>
      <div className={classes.actions}>
        <Button
          variant='contained'
          size='small'
          className={classes.button}
          startIcon={<DeleteIcon />}
          onClick={() => handleItemDelete(config.name)}
        >
          Delete
        </Button>
      </div>
      <Divider />
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

const BuilderItemTooltip = ({
  children,
  currentItemBuild,
  placement,
  config,
  handleItemDelete
}) => {
  const classes = useTooltipStyles()
  if (!currentItemBuild) return children
  return (
    <Tooltip
      interactive
      arrow
      placement={placement}
      classes={classes}
      title={
        <BuilderItemTooltipContent
          currentItemBuild={currentItemBuild}
          config={config}
          handleItemDelete={handleItemDelete}
        />
      }
    >
      {children}
    </Tooltip>
  )
}

export default BuilderItemTooltip
