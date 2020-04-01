import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Grade as BookmarkIcon,
  LocalDining as RecipeIcon
} from '@material-ui/icons'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    margin: theme.spacing(0, 1),
    cursor: 'pointer'
  },
  bookmarkIcon: {
    transition: 'color 0.5s',
    '&:hover': {
      color: '#ffeb3b'
    }
  },
  recipeIcon: {
    transition: 'color 0.5s',
    '&:hover': {
      color: '#ff9800'
    }
  }
}))

const ItemCardFooter = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={`${classes.icon}`}>
        <BookmarkIcon className={classes.bookmarkIcon} />
      </div>
      <div className={`${classes.icon}`}>
        <RecipeIcon className={classes.recipeIcon} />
      </div>
    </div>
  )
}

export default ItemCardFooter
