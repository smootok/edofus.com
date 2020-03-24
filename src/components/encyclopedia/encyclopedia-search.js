import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Paper,
  InputBase,
  IconButton,
  Button,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  Select,
  InputLabel,
  FormControl,
  TextField
} from '@material-ui/core'
import {
  Search as SearchIcon,
  Clear as ResetIcon,
  FilterList as FilterIcon
} from '@material-ui/icons'

import dofusIcon from '../../assets/icons/dofus.png'
import { baseApiUrl } from '../../config'
import useApiData from '../../hooks/use-api-data'

const useStyle = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(3),
    alignItems: 'center',
    justifyContent: 'center'
  },
  searchContainer: {
    border: '1px solid transparent',
    padding: theme.spacing(1.5),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    '&:hover': {
      borderColor: theme.palette.primary.main
    }
  },
  input: {
    flex: 1
  },
  iconButton: {
    padding: theme.spacing(0),
    '& img': {
      width: 20,
      height: 20
    },
    '&:hover': {
      background: 'none'
    }
  },
  iconControl: {
    border: '1px solid transparent',
    borderRadius: 4,
    marginLeft: theme.spacing(1),
    padding: theme.spacing(1.5),
    backgroundColor: theme.palette.background.paper,
    cursor: 'pointer'
  },
  iconFilter: {
    '&:hover, &.active': {
      backgroundColor: theme.palette.primary.main
    }
  },
  iconReset: {
    '&:hover': {
      backgroundColor: theme.palette.error.main
    }
  },
  type: {
    marginRight: theme.spacing(2)
  }
}))

const EncyclopediaSearch = ({ encyclopediaType, setParams }) => {
  const initState = {
    name: '',
    type: '',
    'level[lte]': ''
  }
  const classes = useStyle()
  const [open, setOpen] = React.useState(false)
  const [state, setState] = React.useState({ ...initState })
  const [isSubmit, setIsSubmit] = React.useState(false)
  const [isFilterActive, setIsFilterActive] = React.useState(false)
  const typesUrl = `${baseApiUrl}/encyclopedia/equipment/types`
  const [{ data: types }] = useApiData(typesUrl)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleChange = e => {
    const { name, value } = e.target
    setState(params => ({ ...params, [name]: value }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    setState(state => ({ ...initState, name: state.name }))
    setIsSubmit(true)
  }

  const handleAdvancedSubmit = e => {
    e.preventDefault()
    setOpen(false)
    setState(state => ({ ...state, name: '' }))
    setIsSubmit(true)
  }

  const handleAdvancedCancel = e => {
    setState({ ...initState })
    setOpen(false)
    setIsSubmit(true)
  }

  const handleReset = e => {
    setState({ ...initState })
    setIsSubmit(true)
  }

  React.useEffect(() => {
    if (isSubmit === true) {
      setParams({ ...state, page: 1, isNew: true })
      setIsSubmit(false)
    }
  }, [isSubmit])

  React.useEffect(() => {
    for (const key in state) {
      if (key !== 'name' && state[key] !== '') {
        setIsFilterActive(true)
        return
      }
    }
    setIsFilterActive(false)
  }, [state])

  return (
    <>
      <div className={classes.root}>
        <Paper component='form' className={classes.searchContainer}>
          <IconButton
            className={classes.iconButton}
            style={{ marginRight: '4px' }}
          >
            <img src={dofusIcon} alt='dofus icon' />
          </IconButton>
          <InputBase
            className={classes.input}
            placeholder={`Search in ${encyclopediaType}`}
            value={state.name}
            name='name'
            onChange={handleChange}
            autoComplete='off'
          />
          <IconButton
            type='submit'
            className={classes.iconButton}
            onClick={handleSubmit}
          >
            <SearchIcon />
          </IconButton>
        </Paper>
        <div
          className={`${classes.iconControl} ${classes.iconFilter} ${
            isFilterActive ? 'active' : ''
          }`}
          onClick={handleClickOpen}
        >
          <FilterIcon />
        </div>
        <div
          className={`${classes.iconControl} ${classes.iconReset}`}
          onClick={handleReset}
        >
          <ResetIcon />
        </div>
      </div>
      <Dialog
        onClose={handleClose}
        aria-labelledby='customized-dialog-title'
        open={open}
      >
        <form autoComplete='off'>
          <DialogTitle id='customized-dialog-title' onClose={handleClose}>
            Advanced Search
          </DialogTitle>
          <DialogContent dividers>
            <FormControl variant='outlined' className={classes.type}>
              <InputLabel htmlFor='types-select'>Type</InputLabel>
              <Select
                native
                value={state.type}
                onChange={handleChange}
                label='Types'
                inputProps={{
                  name: 'type',
                  id: 'types-select'
                }}
              >
                <option aria-label='None' value='' />
                {types.map(type => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </Select>
            </FormControl>
            <TextField
              className={classes.level}
              onChange={handleChange}
              value={state['level[lte]']}
              min='1'
              max='200'
              id='outlined-basic'
              type='number'
              label='Level'
              variant='outlined'
              name='level[lte]'
            />
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleAdvancedCancel} color='primary'>
              Cancel
            </Button>
            <Button
              autoFocus
              onClick={handleAdvancedSubmit}
              color='primary'
              type='submit'
            >
              <SearchIcon /> Search
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  )
}

export default EncyclopediaSearch
