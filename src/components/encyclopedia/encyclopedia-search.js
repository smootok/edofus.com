import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, InputBase, IconButton } from '@material-ui/core'
import { Search as SearchIcon } from '@material-ui/icons'

import dofusIcon from '../../assets/icons/dofus.png'

const useStyle = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1, 0.5),
    display: 'flex',
    alignItems: 'center',
    maxWidth: 500,
    margin: 'auto',
    border: '1px solid transparent',
    '&:hover': {
      borderColor: theme.palette.primary.main
    }
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1
  },
  iconButton: {
    padding: 10,
    '& img': {
      width: 20,
      height: 20
    }
  }
}))

const EncyclopediaSearch = () => {
  const classes = useStyle()

  return (
    <Paper component='form' className={classes.root}>
      <IconButton className={classes.iconButton}>
        <img src={dofusIcon} alt='dofus icon' />
      </IconButton>
      <InputBase className={classes.input} placeholder='Search in Equipments' />
      <IconButton type='submit' className={classes.iconButton}>
        <SearchIcon />
      </IconButton>
    </Paper>
  )
}

export default EncyclopediaSearch
