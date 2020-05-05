import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import { Edit as EditIcon, Delete as DeleteIcon } from '@material-ui/icons'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    maxWidth: 290,
    margin: '0 auto 10px auto',
    border: `1px solid ${theme.palette.background.paper}`
  },
  iconControl: {
    border: '1px solid transparent',
    borderRadius: 4,
    marginLeft: theme.spacing(1.5),
    padding: theme.spacing(0.5),
    backgroundColor: theme.palette.background.paper,
    cursor: 'pointer'
  },
  deleteIcon: {
    backgroundColor: theme.palette.error.main,
    '&:hover': {
      backgroundColor: theme.palette.error.dark
    }
  },
  saveIcon: {
    '&:hover': {
      backgroundColor: theme.palette.primary.main
    }
  },
  left: {
    display: 'flex'
  },
  right: {
    display: 'flex'
  }
}))

const BuildActions = ({ build, handleEditBuild, handleRemoveBuild }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.left}>
        <Typography>{build.name}</Typography>
      </div>
      <div className={classes.right}>
        <div
          className={`${classes.iconControl} ${classes.deleteIcon}`}
          onClick={() => handleRemoveBuild(build.id)}
        >
          <DeleteIcon />
        </div>
        <div
          className={`${classes.iconControl} ${classes.saveIcon}`}
          onClick={() => handleEditBuild(build)}
        >
          <EditIcon />
        </div>
      </div>
    </div>
  )
}

export default BuildActions
