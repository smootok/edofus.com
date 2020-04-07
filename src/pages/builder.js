import React from 'react'
import { useLocation } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'

import Layout from '../components/layout/layout'
import BuilderItemContainer from '../components/builder/builder-item-container'
import { initBuild, builderConfig } from '../components/builder/builder.config'

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 100
  }
}))

const Builder = () => {
  const classes = useStyles()
  const { data: selectedItemData } = useLocation()
  const [currentBuild, setCurrentBuild] = React.useState(() => {
    return JSON.parse(window.localStorage.getItem('currentBuild')) || { ...initBuild }
  })

  React.useEffect(() => {
    if (!selectedItemData) return
    const { currentItemBuild, builderConfig } = selectedItemData
    setCurrentBuild(currentBuild => ({ ...currentBuild, [builderConfig.name]: currentItemBuild }))
  }, [selectedItemData])

  React.useEffect(() => {
    window.localStorage.setItem('currentBuild', JSON.stringify(currentBuild))
  }, [currentBuild])

  return (
    <Layout>
      <div className={classes.root}>
        <BuilderItemContainer builderConfig={builderConfig} currentBuild={currentBuild} />
      </div>
    </Layout>
  )
}

export default Builder
