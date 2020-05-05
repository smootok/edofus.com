import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import BuildItem from './build-item'
import { imagesBaseUrl } from '../../config'

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 290,
    margin: 'auto'
  },
  top: {
    display: 'flex',
    '& *:not(:last-child)': {
      marginBottom: theme.spacing(2)
    }
  },
  center: {
    flex: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  bottom: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  classImg: {
    '& img': {
      maxWidth: 150
    }
  }
}))

const BuildItemContainer = ({
  config,
  build
}) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.top}>
        <div className={classes.left}>
          <BuildItem
            config={config.amulet}
            buildItem={build.amulet}
          />
          <BuildItem
            config={config.ring1}
            buildItem={build.ring1}
          />
          <BuildItem
            config={config.ring2}
            buildItem={build.ring2}
          />
          <BuildItem
            config={config.shield}
            buildItem={build.shield}
          />
          <BuildItem
            config={config.weapon}
            buildItem={build.weapon}
          />
        </div>
        <div className={classes.center}>
          <div className={classes.classImg}>
            <img
              src={`${imagesBaseUrl}/classes/${build.classType}.png`}
              alt={build.classType}
            />
          </div>
        </div>
        <div className={classes.right}>
          <BuildItem
            config={config.hat}
            buildItem={build.hat}
          />
          <BuildItem
            config={config.cloak}
            buildItem={build.cloak}
          />
          <BuildItem
            config={config.belt}
            buildItem={build.belt}
          />
          <BuildItem
            config={config.boots}
            buildItem={build.boots}
          />
          <BuildItem
            config={config.pet}
            buildItem={build.pet}
          />
        </div>
      </div>
      <div className={classes.bottom}>
        <BuildItem
          config={config.dofus1}
          buildItem={build.dofus1}
        />
        <BuildItem
          config={config.dofus2}
          buildItem={build.dofus2}
        />
        <BuildItem
          config={config.dofus3}
          buildItem={build.dofus3}
        />
        <BuildItem
          config={config.dofus4}
          buildItem={build.dofus4}
        />
        <BuildItem
          config={config.dofus5}
          buildItem={build.dofus5}
        />
        <BuildItem
          config={config.dofus6}
          buildItem={build.dofus6}
        />
      </div>
    </div>
  )
}

export default BuildItemContainer
