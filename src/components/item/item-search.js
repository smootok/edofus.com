/* eslint-disable indent */
import React from 'react'
import { useLocation } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, InputBase, IconButton } from '@material-ui/core'
import {
  Search as SearchIcon,
  Clear as ResetIcon,
  FilterList as FilterIcon
} from '@material-ui/icons'

import dofusIcon from '../../assets/dofus.png'
import ItemSearchFilter from './item-search-filter'
import { typesConfig } from './item.config'
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
  nameInput: {
    flex: 1,
    marginLeft: 4
  },
  insideIcon: {
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

const ItemSearch = ({ setFetchParams }) => {
  const classes = useStyles()
  const { pathname, data: builderConfig } = useLocation()

  const initParams = {
    name: '',
    'level[gte]': '',
    'level[lte]': '',
    'type[in]': [],
    'effects.name[all]': [],
    page: 1,
    isNew: true
  }

  const initTypes = builderConfig
    ? builderConfig.filterTypes.reduce(
        (acc, cur) => ({ ...acc, [cur]: false }),
        {}
      )
    : typesConfig[pathname].reduce((acc, cur) => ({ ...acc, [cur]: false }), {})

  const [open, setOpen] = React.useState(false)
  const [types, setTypes] = React.useState({ ...initTypes })
  const [selectedEffects, setSelectedEffects] = React.useState([])
  const [params, setParams] = React.useState({ ...initParams })

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
    const { name, value } = e.target
    setParams(params => ({ ...params, [name]: value }))
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

  const handleSubmit = e => {
    e.preventDefault()
    const p = removeEmptyParams({ ...params })
    setFetchParams(p)
  }

  const handleFilterSubmit = e => {
    const p = removeEmptyParams({ ...params })
    if (builderConfig && !p['type[in]']) {
      setFetchParams({ ...p, 'type[in]': [...builderConfig.filterTypes] })
    } else {
      setFetchParams(p)
    }
    handleClose()
  }

  return (
    <>
      <div className={classes.root}>
        <Paper
          component='form'
          className={classes.searchContainer}
          onSubmit={handleSubmit}
        >
          <IconButton className={classes.insideIcon}>
            <img src={dofusIcon} alt='dofus icon' />
          </IconButton>
          <InputBase
            className={classes.nameInput}
            placeholder='Search'
            value={params.name}
            name='name'
            onChange={handleNameChange}
            autoComplete='off'
          />
          <IconButton type='submit' className={classes.insideIcon}>
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
        <ItemSearchFilter
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

export default ItemSearch
