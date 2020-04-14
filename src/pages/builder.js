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
import {
  calcBasePoints,
  calcEffects
} from '../components/builder/builder.utils'

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
  const [basePoints, setBasePoints] = React.useState(0)

  const [effects, setEffects] = React.useState({})

  React.useEffect(() => {
    if (!currentBuild) return
    const effects = calcEffects(currentBuild)
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
    const basePoints = calcBasePoints(currentBuild)
    setBasePoints(basePoints)
  }, [currentBuild])

  const handleLevelChange = e => {
    const { value } = e.target

    if (value > 200 || value < 0) return
    setCurrentBuild(currentBuild => ({
      ...currentBuild,
      level: value ? parseInt(value).toString() : 0,
      baseStats: { ...initBuild.baseStats }
    }))
  }

  const handleClassTypeChange = e => {
    const { value } = e.target
    setCurrentBuild(currentBuild => ({
      ...currentBuild,
      classType: value
    }))
  }

  const handleBaseStatsChange = e => {
    const { name, value } = e.target
    const newCurrentBuild = {
      ...currentBuild,
      baseStats: {
        ...currentBuild.baseStats,
        [name]: value ? parseInt(value).toString() : 0
      }
    }
    const basePoints = calcBasePoints(newCurrentBuild)
    if (basePoints < 0) return
    setCurrentBuild(currentBuild => newCurrentBuild)
  }

  const handleScrollsChange = e => {
    const { name, checked } = e.target
    setCurrentBuild(currentBuild => ({
      ...currentBuild,
      scrolls: { ...currentBuild.scrolls, [name]: checked ? 101 : 0 }
    }))
  }

  const handleItemDelete = name => {
    setCurrentBuild(currentBuild => ({
      ...currentBuild,
      [name]: null
    }))
  }

  const handleItemsReset = () => {
    setCurrentBuild(currentBuild => ({
      ...initBuild,
      classType: currentBuild.classType
    }))
  }

  return (
    <Layout>
      <div className={classes.root}>
        <Grid container>
          <Grid item lg={3}>
            <BuilderEffects effects={effects} />
          </Grid>
          <Grid item lg={6}>
            <BuilderActions
              level={currentBuild.level}
              classType={currentBuild.classType}
              handleLevelChange={handleLevelChange}
              handleClassTypeChange={handleClassTypeChange}
              handleBaseStatsChange={handleBaseStatsChange}
              handleItemsReset={handleItemsReset}
            />
            <BuilderItemContainer
              builderConfig={builderConfig}
              currentBuild={currentBuild}
              handleItemDelete={handleItemDelete}
            />
          </Grid>
          <Grid item lg={3}>
            {currentBuild && (
              <BuilderCharacteristics
                basePoints={basePoints}
                baseStats={currentBuild.baseStats}
                handleBaseStatsChange={handleBaseStatsChange}
                scrolls={currentBuild.scrolls}
                handleScrollsChange={handleScrollsChange}
              />
            )}
          </Grid>
        </Grid>
      </div>
    </Layout>
  )
}

export default Builder
