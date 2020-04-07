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
  const {data: selectedItemData} = useLocation()
  const [items, setItems] = React.useState({...initBuild})

  React.useEffect(() => {
    if (!selectedItemData) return
    const { item, builderConfig } = selectedItemData
    setItems(build => ({...build, [builderConfig.name]: item }))
  }, [selectedItemData])

  return (
    <Layout>
      <div className={classes.root}>
        <BuilderItemContainer builderConfig={builderConfig} items={items} />
      </div>
    </Layout>
  )
}

export default Builder
