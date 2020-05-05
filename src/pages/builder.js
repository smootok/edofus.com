import React from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'
import axios from 'axios'

import Layout from '../components/layout/layout'
import BuilderItemContainer from '../components/builder/builder-item-container'
import BuilderEffects from '../components/builder/builder-effects'
import { initBuild, builderConfig } from '../components/builder/builder.config'
import BuilderCharacteristics from '../components/builder/builder-characteristics'
import BuilderActions from '../components/builder/builder-actions'
import useUser from '../hooks/use-user'
import { apiBaseUrl } from '../config'
import {
  calcBasePoints,
  calcEffects
} from '../components/builder/builder.utils'

const useStyles = makeStyles(theme => ({
  root: {
    margin: '100px 50px',
    display: 'flex'
  },
  builderEffectsGrid: {
    margin: '0 auto',
    [theme.breakpoints.down('xs')]: {
      order: 2
    }
  },
  builderItemContainerGrid: {
    [theme.breakpoints.down('md')]: {
      order: -1
    },
    margin: '0 auto'
  },
  builderCharacteristicsGrid: {
    margin: '0 auto',
    [theme.breakpoints.down('xs')]: {
      order: 1
    }
  }
}))

const Builder = () => {
  const classes = useStyles()
  const { data: selectedItemData, build } = useLocation()
  const [currentBuild, setCurrentBuild] = React.useState(() => {
    return (
      build ||
      JSON.parse(window.localStorage.getItem('currentBuild')) || {
        ...initBuild
      }
    )
  })
  const [basePoints, setBasePoints] = React.useState(0)
  const [effects, setEffects] = React.useState({})
  const [saveBuildError, setSaveBuildError] = React.useState()

  const { user, isLoggedIn, token } = useUser()

  const history = useHistory()

  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  React.useEffect(() => {
    if (!selectedItemData) return
    const { currentItemBuild, builderConfig } = selectedItemData
    setCurrentBuild(currentBuild => ({
      ...currentBuild,
      [builderConfig.name]: currentItemBuild
    }))
  }, [selectedItemData])

  React.useEffect(() => {
    if (!currentBuild) return
    const effects = calcEffects(currentBuild)
    setEffects(effects)
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
      scrolls: { ...currentBuild.scrolls, [name]: checked ? 100 : 0 }
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

  const handleSaveBuild = async name => {
    if (!name) return
    if (!isLoggedIn) {
      history.push({
        pathname: '/sign-in',
        message: 'Please sign-in to save your build'
      })
    }
    try {
      const headers = { authorization: `Bearer ${token}` }
      const newData = { name, build: JSON.stringify(currentBuild) }
      if (currentBuild.id && user._id === currentBuild.userId) {
        const url = `${apiBaseUrl}/${currentBuild.id}`
        await axios.patch(url, newData, { headers })
      } else {
        const url = `${apiBaseUrl}/`
        await axios.post(url, newData, { headers })
      }
      setCurrentBuild({ ...initBuild })
      history.push({ pathname: '/builds' })
    } catch (err) {
      setSaveBuildError(err.response.data.message)
    }
  }

  return (
    <Layout>
      <div className={classes.root}>
        <Grid container spacing={2}>
          <Grid
            item
            lg={3}
            md={6}
            sm={6}
            xs={12}
            className={classes.builderEffectsGrid}
          >
            <BuilderEffects effects={effects} />
          </Grid>

          <Grid
            item
            lg={6}
            md={12}
            sm={12}
            xs={12}
            className={classes.builderItemContainerGrid}
          >
            <BuilderActions
              level={currentBuild.level}
              classType={currentBuild.classType}
              handleLevelChange={handleLevelChange}
              handleClassTypeChange={handleClassTypeChange}
              handleBaseStatsChange={handleBaseStatsChange}
              handleItemsReset={handleItemsReset}
              handleSaveBuild={handleSaveBuild}
            />
            <BuilderItemContainer
              builderConfig={builderConfig}
              currentBuild={currentBuild}
              handleItemDelete={handleItemDelete}
              saveBuildError={saveBuildError}
            />
          </Grid>
          <Grid
            item
            lg={3}
            md={6}
            sm={6}
            xs={12}
            className={classes.builderCharacteristicsGrid}
          >
            {currentBuild.baseStats && (
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
