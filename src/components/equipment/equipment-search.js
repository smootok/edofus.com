import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, InputBase, IconButton } from '@material-ui/core'
import {
  Search as SearchIcon,
  Clear as ResetIcon,
  FilterList as FilterIcon
} from '@material-ui/icons'

import dofusIcon from '../../assets/icons/dofus.png'
import EquipmentSearchFilter from './equipment-search-filter'
import { removeEmptyParams } from '../../utils/utils'
import { apiBaseUrl } from '../../config'
import useApiData from '../../hooks/use-api-data'

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
    flex: 1,
    marginLeft: 4
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

const EquipmentSearch = ({ setFetchParams }) => {
  const classes = useStyles()

  const initParams = {
    'level[gte]': '',
    'level[lte]': '',
    'type[in]': [],
    'effects.name[all]': []
  }

  const [open, setOpen] = React.useState(false)
  const [name, setName] = React.useState('')
  const [types, setTypes] = React.useState({})
  const [selectedEffects, setSelectedEffects] = React.useState([])
  const [params, setParams] = React.useState(initParams)

  const [{ data: fetchedTypes }] = useApiData(
    `${apiBaseUrl}/encyclopedia/equipment/types`
  )

  React.useEffect(() => {
    const types = fetchedTypes.reduce(
      (acc, cur) => ({ ...acc, [cur]: false }),
      {}
    )
    setTypes(types)
  }, [fetchedTypes])

  React.useEffect(() => {
    setParams(params => ({
      ...params,
      'type[in]': Object.keys(types).filter(type => types[type] === true)
    }))
  }, [types])

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

  const handleLevelChange = e => {
    const { name, value } = e.target
    setParams(params => ({ ...params, [name]: value }))
  }

  const handleTypesChange = e => {
    const { name, checked } = e.target
    setTypes(types => ({ ...types, [name]: checked }))
  }

  const handleEffectsChange = (e, options) => {
    setSelectedEffects(options)
    setParams(params => ({
      ...params,
      'effects.name[all]': options.map(option => option.name)
    }))
  }

  const resetFilter = () => {
    const newTypes = {}
    for (const type in types) {
      newTypes[type] = false
    }
    setTypes(newTypes)
    setSelectedEffects([])
    setParams(initParams)
  }

  const handleReset = e => {
    setName('')
    resetFilter()
    setFetchParams({ page: 1, isNew: true })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const params = removeEmptyParams({ name, page: 1, isNew: true })
    setFetchParams(params)
    resetFilter()
  }

  const handleFilterSubmit = e => {
    e.preventDefault()
    const p = removeEmptyParams({ ...params })
    setFetchParams({ ...p, page: 1, isNew: true })
    setName('')
    handleClose()
  }

  return (
    <>
      <div className={classes.root}>
        <Paper component='form' className={classes.searchContainer}>
          <IconButton className={classes.iconButton}>
            <img src={dofusIcon} alt='dofus icon' />
          </IconButton>
          <InputBase
            className={classes.input}
            placeholder='Search in equipment'
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
          className={`${classes.iconControl} ${classes.iconFilter} ${
            Object.keys(removeEmptyParams({ ...params })).length === 0
              ? ''
              : 'active'
          }`}
          onClick={handleOpen}
        >
          <FilterIcon />
        </div>
        <div
          className={`${classes.iconControl} ${classes.iconReset}`}
          onClick={handleReset}
        >
          <ResetIcon />
        </div>
        <EquipmentSearchFilter
          open={open}
          params={params}
          types={types}
          selectedEffects={selectedEffects}
          handleClose={handleClose}
          handleLevelChange={handleLevelChange}
          handleTypesChange={handleTypesChange}
          handleEffectsChange={handleEffectsChange}
          handleFilterSubmit={handleFilterSubmit}
        />
      </div>
    </>
  )
}

export default EquipmentSearch
