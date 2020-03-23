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
  Typography
} from '@material-ui/core'
import {
  Search as SearchIcon,
  Clear as ResetIcon,
  FilterList as FilterIcon
} from '@material-ui/icons'

import dofusIcon from '../../assets/icons/dofus.png'

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
    '&:hover': {
      backgroundColor: theme.palette.primary.main
    }
  },
  iconReset: {
    '&:hover': {
      backgroundColor: theme.palette.error.main
    }
  }
}))

const EncyclopediaSearch = ({ encyclopediaType, setParams }) => {
  const classes = useStyle()
  const [open, setOpen] = React.useState(false)
  const [name, setName] = React.useState('')
  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  const handleSubmit = e => {
    e.preventDefault()
    setParams(params => ({ name, page: 1, isNew: true }))
  }

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
            value={name}
            onChange={e => setName(e.target.value)}
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
          className={`${classes.iconControl} ${classes.iconFilter}`}
          onClick={handleClickOpen}
        >
          <FilterIcon />
        </div>
        <div className={`${classes.iconControl} ${classes.iconReset}`}>
          <ResetIcon />
        </div>
      </div>
      <Dialog
        onClose={handleClose}
        aria-labelledby='customized-dialog-title'
        open={open}
      >
        <DialogTitle id='customized-dialog-title' onClose={handleClose}>
          Modal title
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </Typography>
          <Typography gutterBottom>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor.
          </Typography>
          <Typography gutterBottom>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
            dui. Donec ullamcorper nulla non metus auctor fringilla.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color='primary'>
            Save changes
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default EncyclopediaSearch
