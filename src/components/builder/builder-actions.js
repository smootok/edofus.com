import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { FormControl, InputLabel, Select, TextField } from '@material-ui/core'
import { Save as SaveIcon, Delete as DeleteIcon } from '@material-ui/icons'

import { classesConfig } from './builder.config'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    maxWidth: 480,
    margin: 'auto',
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
  },
  levelContainer: {
    maxWidth: 70,
    marginLeft: 10
  },
  classesSelect: {
    maxWidth: 100
  }
}))

const BuilderActions = ({
  level,
  classType,
  handleLevelChange,
  handleClassTypeChange,
  handleItemsReset
}) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.left}>
        <div className={classes.classesContainer}>
          <FormControl
            variant='outlined'
            className={classes.formControl}
            size='small'
          >
            <InputLabel htmlFor='outlined-age-native-simple'>Class</InputLabel>
            <Select
              native
              label='Class'
              className={classes.classesSelect}
              name='classType'
              value={classType}
              onChange={handleClassTypeChange}
            >
              {classesConfig.map(classConfig => (
                <option key={classConfig} value={classConfig}>
                  {classConfig}
                </option>
              ))}
            </Select>
          </FormControl>
        </div>

        <div className={classes.levelContainer}>
          <TextField
            name='level'
            label='level'
            variant='outlined'
            size='small'
            type='number'
            onChange={handleLevelChange}
            value={level}
            className={classes.input}
          />
        </div>
      </div>
      <div className={classes.right}>
        <div className={`${classes.iconControl} ${classes.deleteIcon}`} onClick={handleItemsReset}>
          <DeleteIcon />
        </div>
        <div className={`${classes.iconControl} ${classes.saveIcon}`}>
          <SaveIcon />
        </div>
      </div>
    </div>
  )
}

export default BuilderActions
