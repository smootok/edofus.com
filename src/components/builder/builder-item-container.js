import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import BuilderItem from './builder-item'

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 480,
    margin: '20px auto'
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
  }
}))

const BuilderItemContainer = ({ builderConfig, currentBuild }) => {
  const classes = useStyles()
  const classImgUrl = 'https://api.edofus.com/images/classes/sram.png'

  return (
    <div className={classes.root}>
      <div className={classes.top}>
        <div className={classes.left}>
          <BuilderItem
            config={builderConfig.amulet}
            currentItemBuild={currentBuild.amulet}
          />
          <BuilderItem
            config={builderConfig.ring1}
            currentItemBuild={currentBuild.ring1}
          />
          <BuilderItem
            config={builderConfig.ring2}
            currentItemBuild={currentBuild.ring2}
          />
          <BuilderItem
            config={builderConfig.shield}
            currentItemBuild={currentBuild.shield}
          />
          <BuilderItem
            config={builderConfig.weapon}
            currentItemBuild={currentBuild.weapon}
          />
        </div>
        <div className={classes.center}>
          <div className={classes.classImg}>
            <img src={classImgUrl} alt='' />
          </div>
        </div>
        <div className={classes.right}>
          <BuilderItem
            config={builderConfig.hat}
            currentItemBuild={currentBuild.hat}
          />
          <BuilderItem
            config={builderConfig.cloak}
            currentItemBuild={currentBuild.cloak}
          />
          <BuilderItem
            config={builderConfig.belt}
            currentItemBuild={currentBuild.belt}
          />
          <BuilderItem
            config={builderConfig.boots}
            currentItemBuild={currentBuild.boots}
          />
          <BuilderItem
            config={builderConfig.pet}
            currentItemBuild={currentBuild.pet}
          />
        </div>
      </div>
      <div className={classes.bottom}>
        <BuilderItem
          config={builderConfig.dofus1}
          currentItemBuild={currentBuild.dofus1}
        />
        <BuilderItem
          config={builderConfig.dofus2}
          currentItemBuild={currentBuild.dofus2}
        />
        <BuilderItem
          config={builderConfig.dofus3}
          currentItemBuild={currentBuild.dofus3}
        />
        <BuilderItem
          config={builderConfig.dofus4}
          currentItemBuild={currentBuild.dofus4}
        />
        <BuilderItem
          config={builderConfig.dofus5}
          currentItemBuild={currentBuild.dofus5}
        />
        <BuilderItem
          config={builderConfig.dofus6}
          currentItemBuild={currentBuild.dofus6}
        />
      </div>
    </div>
  )
}

export default BuilderItemContainer
