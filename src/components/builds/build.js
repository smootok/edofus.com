import React from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import BuildItemContainer from './build-item-container'
import BuildActions from './build-actions'

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(4)
  }
}))
const Build = ({
  config,
  build,
  handleEditBuild,
  handleRemoveBuild
}) => {
  const classes = useStyles()
  return (
    <Grid item xs={12} md={6} lg={4} xl={3} className={classes.root}>
      <BuildActions
        build={build}
        handleEditBuild={handleEditBuild}
        handleRemoveBuild={handleRemoveBuild}
      />
      <BuildItemContainer config={config} build={build} />
    </Grid>
  )
}

export default Build
