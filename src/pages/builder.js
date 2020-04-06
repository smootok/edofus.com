import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Layout from '../components/layout/layout'
import BuilderItemContainer from '../components/builder/builder-item-container'
import { initItems, builderConfig } from '../components/builder/builder.config'

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 100
  }
}))

const Builder = () => {
  const classes = useStyles()

  const [items, setItems] = React.useState({ ...initItems })

  return (
    <Layout>
      <div className={classes.root}>
        <BuilderItemContainer builderConfig={builderConfig} />
      </div>
    </Layout>
  )
}

export default Builder
