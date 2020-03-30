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

import { baseApiUrl } from '../../config'
import useApiData from '../../hooks/use-api-data'
import effectsConfig from './encyclopedia-effects.config'
import { removeEmptyParams } from '../../utils/utils'

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

const EncyclopediaSearchFilter = ({
  open,
  setOpen,
  handleClose,
  setParams: setFetchParams
}) => {
  const classes = useStyles()
  const [params, setParams] = React.useState({
    'level[gte]': '',
    'level[lte]': '',
    'type[in]': [],
    'effects.name[all]': []
  })
  const [types, setTypes] = React.useState({})
  const [effects, setEffects] = React.useState([])
  const [{ data: typesData }] = useApiData(
    `${baseApiUrl}/encyclopedia/equipment/types`
  )

  const handleLevelChange = e => {
    const { name, value } = e.target
    setParams(params => ({ ...params, [name]: value }))
  }

  const handleTypesChange = e => {
    const { name, checked } = e.target
    setTypes(types => ({ ...types, [name]: checked }))
  }

  const handleEffectsChange = (e, options) => {
    setParams(params => ({
      ...params,
      'effects.name[all]': options.map(option => option.name)
    }))
    setEffects(options)
  }

  const handleSubmit = e => {
    e.preventDefault()
    const p = removeEmptyParams({ ...params })
    setFetchParams({ ...p, page: 1, isNew: true })
    setOpen(false)
  }

  const getEffects = effectsConfig => {
    const effects = []
    for (const key in effectsConfig) {
      for (const effect of effectsConfig[key]) {
        effects.push(effect)
      }
    }
    return effects
  }

  React.useEffect(() => {
    const stateTypes = {}
    for (const type of typesData) {
      stateTypes[type] = false
    }
    setTypes({ ...stateTypes })
  }, [typesData])

  React.useEffect(() => {
    setParams(params => ({
      ...params,
      'type[in]': Object.keys(types).filter(type => types[type] === true)
    }))
  }, [types])

  return (
    <Dialog className={classes.root} onClose={handleClose} open={open}>
      <DialogTitle id='customized-dialog-title' onClose={handleClose}>
        Advanced Search
      </DialogTitle>
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
            options={getEffects(effectsConfig)}
            value={effects}
            getOptionLabel={option => option.text}
            renderInput={params => (
              <TextField {...params} variant='outlined' label='Effects' />
            )}
          />
        </div>
      </DialogContent>
      <DialogActions>
        <Button type='submit' color='primary' onClick={handleSubmit}>
          <SearchIcon /> Search
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default EncyclopediaSearchFilter
