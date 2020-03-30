import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, InputBase, IconButton } from '@material-ui/core'
import {
  Search as SearchIcon,
  Clear as ResetIcon,
  FilterList as FilterIcon
} from '@material-ui/icons'

import dofusIcon from '../../assets/icons/dofus.png'
import EncyclopediaSearchFilter from './encyclopedia-search-filter'
import { removeEmptyParams } from '../../utils/utils'

const useStyles = makeStyles(theme => ({
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
  }
}))

const EncyclopediaSearch = ({ encyclopediaType, setParams }) => {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)
  const [name, setName] = React.useState('')

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleNameChange = e => {
    const { value } = e.target
    setName(value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    const params = removeEmptyParams({ name, page: 1, isNew: true })
    setParams(params)
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
            name='name'
            onChange={handleNameChange}
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
          className={`${classes.iconControl} ${classes.iconFilter}`}
          onClick={handleOpen}
        >
          <FilterIcon />
        </div>
        <div className={`${classes.iconControl} ${classes.iconReset}`}>
          <ResetIcon />
        </div>
        <EncyclopediaSearchFilter
          open={open}
          setOpen={setOpen}
          handleClose={handleClose}
          setParams={setParams}
        />
      </div>
    </>
  )
}

export default EncyclopediaSearch
