import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import BuilderItem from './builder-item'
import { imagesBaseUrl } from '../../config'

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

const BuilderItemContainer = ({
  builderConfig,
  currentBuild,
  handleItemDelete
}) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.top}>
        <div className={classes.left}>
          <BuilderItem
            config={builderConfig.amulet}
            currentItemBuild={currentBuild.amulet}
            handleItemDelete={handleItemDelete}
          />
          <BuilderItem
            config={builderConfig.ring1}
            currentItemBuild={currentBuild.ring1}
            handleItemDelete={handleItemDelete}
          />
          <BuilderItem
            config={builderConfig.ring2}
            currentItemBuild={currentBuild.ring2}
            handleItemDelete={handleItemDelete}
          />
          <BuilderItem
            config={builderConfig.shield}
            currentItemBuild={currentBuild.shield}
            handleItemDelete={handleItemDelete}
          />
          <BuilderItem
            config={builderConfig.weapon}
            currentItemBuild={currentBuild.weapon}
            handleItemDelete={handleItemDelete}
          />
        </div>
        <div className={classes.center}>
          <div className={classes.classImg}>
            <img
              src={`${imagesBaseUrl}/classes/${currentBuild.classType}.png`}
              alt={currentBuild.classType}
            />
          </div>
        </div>
        <div className={classes.right}>
          <BuilderItem
            config={builderConfig.hat}
            currentItemBuild={currentBuild.hat}
            handleItemDelete={handleItemDelete}
          />
          <BuilderItem
            config={builderConfig.cloak}
            currentItemBuild={currentBuild.cloak}
          />
          <BuilderItem
            config={builderConfig.belt}
            currentItemBuild={currentBuild.belt}
            handleItemDelete={handleItemDelete}
          />
          <BuilderItem
            config={builderConfig.boots}
            currentItemBuild={currentBuild.boots}
            handleItemDelete={handleItemDelete}
          />
          <BuilderItem
            config={builderConfig.pet}
            currentItemBuild={currentBuild.pet}
            handleItemDelete={handleItemDelete}
          />
        </div>
      </div>
      <div className={classes.bottom}>
        <BuilderItem
          config={builderConfig.dofus1}
          currentItemBuild={currentBuild.dofus1}
          handleItemDelete={handleItemDelete}
        />
        <BuilderItem
          config={builderConfig.dofus2}
          currentItemBuild={currentBuild.dofus2}
          handleItemDelete={handleItemDelete}
        />
        <BuilderItem
          config={builderConfig.dofus3}
          currentItemBuild={currentBuild.dofus3}
          handleItemDelete={handleItemDelete}
        />
        <BuilderItem
          config={builderConfig.dofus4}
          currentItemBuild={currentBuild.dofus4}
          handleItemDelete={handleItemDelete}
        />
        <BuilderItem
          config={builderConfig.dofus5}
          currentItemBuild={currentBuild.dofus5}
          handleItemDelete={handleItemDelete}
        />
        <BuilderItem
          config={builderConfig.dofus6}
          currentItemBuild={currentBuild.dofus6}
          handleItemDelete={handleItemDelete}
        />
      </div>
    </div>
  )
}

export default BuilderItemContainer
