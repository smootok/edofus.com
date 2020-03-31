import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import {
  Button,
  Dialog,
  DialogTitle as MuiDialogTitle,
  DialogContent as MuiDialogContent,
  DialogActions as MuiDialogActions,
  IconButton,
  Typography,
  TextField,
  Checkbox,
  FormControlLabel,
  FormGroup
} from '@material-ui/core'
import { Autocomplete } from '@material-ui/lab'
import { Search as SearchIcon, Close as CloseIcon } from '@material-ui/icons'

import { effectsConfig } from './equipment.config'

const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2)
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  }
})

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose, ...other } = props
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant='h6'>{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label='close'
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  )
})

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
    minWidth: 300
  }
}))(MuiDialogContent)

const DialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1)
  }
}))(MuiDialogActions)

const useStyles = makeStyles(theme => ({
  title: {
    color: theme.palette.primary.main,
    fontSize: 14,
    paddingBottom: theme.spacing(1),
    borderBottom: '1px solid',
    margin: theme.spacing(2, 0),
    textTransform: 'uppercase'
  },
  level: {
    textAlign: 'center'
  },
  inputLevel: {
    maxWidth: 100,
    margin: theme.spacing(0, 1)
  }
}))

const EquipmentSearchFilter = ({
  open,
  handleClose,
  params,
  types,
  selectedEffects,
  handleLevelChange,
  handleTypesChange,
  handleEffectsChange,
  handleFilterSubmit
}) => {
  const classes = useStyles()

  const effects = (effectsConfig => {
    const effects = []
    for (const key in effectsConfig) {
      for (const effect of effectsConfig[key]) {
        effects.push(effect)
      }
    }
    return effects
  })(effectsConfig)

  return (
    <Dialog className={classes.root} onClose={handleClose} open={open}>
      <DialogTitle onClose={handleClose}>Advanced Search</DialogTitle>
      <DialogContent dividers>
        <div className={classes.title}>Level</div>
        <div className={classes.level}>
          <TextField
            onChange={handleLevelChange}
            value={params['level[gte]']}
            name='level[gte]'
            className={classes.inputLevel}
            label='Min'
            type='number'
            variant='outlined'
          />
          <TextField
            onChange={handleLevelChange}
            value={params['level[lte]']}
            name='level[lte]'
            className={classes.inputLevel}
            label='Max'
            type='number'
            variant='outlined'
          />
        </div>
        <div className={classes.title}>Types</div>
        <div className={classes.types}>
          <FormGroup aria-label='position' row>
            {Object.keys(types).map(type => (
              <FormControlLabel
                onChange={handleTypesChange}
                checked={types[type]}
                name={type}
                key={type}
                control={<Checkbox color='primary' />}
                label={type}
                labelPlacement='end'
              />
            ))}
          </FormGroup>
        </div>
        <div className={classes.title}>Effects</div>
        <div className={classes.effects}>
          <Autocomplete
            multiple
            onChange={handleEffectsChange}
            value={selectedEffects}
            options={effects}
            getOptionLabel={option => option.text}
            renderInput={params => (
              <TextField {...params} variant='outlined' label='Effects' />
            )}
          />
        </div>
      </DialogContent>
      <DialogActions>
        <Button type='submit' color='primary' onClick={handleFilterSubmit}>
          <SearchIcon /> Search
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default EquipmentSearchFilter
