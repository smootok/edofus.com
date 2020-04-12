import React from 'react'
import { useLocation } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'

import Layout from '../components/layout/layout'
import BuilderItemContainer from '../components/builder/builder-item-container'
import BuilderEffects from '../components/builder/builder-effects'
import { initBuild, builderConfig } from '../components/builder/builder.config'
import BuilderCharacteristics from '../components/builder/builder-characteristics'
import BuilderActions from '../components/builder/builder-actions'

const useStyles = makeStyles(theme => ({
  root: {
    margin: '100px 50px',
    display: 'flex'
  }
}))

const Builder = () => {
  const classes = useStyles()
  const { data: selectedItemData } = useLocation()
  const [currentBuild, setCurrentBuild] = React.useState(() => {
    return (
      JSON.parse(window.localStorage.getItem('currentBuild')) || {
        ...initBuild
      }
    )
  })

  const [effects, setEffects] = React.useState({})

  React.useEffect(() => {
    if (!currentBuild) return
    const effects = {}
    for (const type in currentBuild) {
      if (currentBuild[type] && currentBuild[type].effects) {
        for (const effect of currentBuild[type].effects) {
          effects[effect.name] = effects[effect.name]
            ? effects[effect.name] + (effect.end || effect.start || 0)
            : effect.end || effect.start || 0
        }
      }
    }
    setEffects(effects)
  }, [currentBuild])

  React.useEffect(() => {
    if (!selectedItemData) return
    const { currentItemBuild, builderConfig } = selectedItemData
    setCurrentBuild(currentBuild => ({
      ...currentBuild,
      [builderConfig.name]: currentItemBuild
    }))
  }, [selectedItemData])

  React.useEffect(() => {
    window.localStorage.setItem('currentBuild', JSON.stringify(currentBuild))
  }, [currentBuild])

  return (
    <Layout>
      <div className={classes.root}>
        <Grid container>
          <Grid item lg={3}>
            <BuilderEffects effects={effects} />
          </Grid>
          <Grid item lg={6}>
            <BuilderActions />
            <BuilderItemContainer
              builderConfig={builderConfig}
              currentBuild={currentBuild}
            />
          </Grid>
          <Grid item lg={3}>
            <BuilderCharacteristics />
          </Grid>
        </Grid>
      </div>
    </Layout>
  )
}

export default Builder
