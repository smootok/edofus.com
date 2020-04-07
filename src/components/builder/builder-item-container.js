import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import BuilderItem from './builder-item'

const useStyles = makeStyles(theme => ({
  root: {
    width: 400,
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
  }
}))

const BuilderItemContainer = ({ builderConfig, items }) => {
  const classes = useStyles()
  const classImgUrl = 'https://api.edofus.com/images/classes/sram.png'

  return (
    <div className={classes.root}>
      <div className={classes.top}>
        <div className={classes.left}>
          <BuilderItem config={builderConfig.amulet} item={items.amulet} />
          <BuilderItem config={builderConfig.ring1} item={items.ring1} />
          <BuilderItem config={builderConfig.ring2} item={items.ring2} />
          <BuilderItem config={builderConfig.shield} item={items.shield} />
          <BuilderItem config={builderConfig.weapon} item={items.weapon} />
        </div>
        <div className={classes.center}>
          <div className={classes.classImg}>
            <img src={classImgUrl} alt='' />
          </div>
        </div>
        <div className={classes.right}>
          <BuilderItem config={builderConfig.hat} item={items.hat} />
          <BuilderItem config={builderConfig.cloak} item={items.cloak} />
          <BuilderItem config={builderConfig.belt} item={items.belt} />
          <BuilderItem config={builderConfig.boots} item={items.boots} />
          <BuilderItem config={builderConfig.pet} item={items.pet} />
        </div>
      </div>
      <div className={classes.bottom}>
        <BuilderItem config={builderConfig.dofus1} item={items.dofus1} />
        <BuilderItem config={builderConfig.dofus2} item={items.dofus2} />
        <BuilderItem config={builderConfig.dofus3} item={items.dofus3} />
        <BuilderItem config={builderConfig.dofus4} item={items.dofus4} />
        <BuilderItem config={builderConfig.dofus5} item={items.dofus5} />
        <BuilderItem config={builderConfig.dofus6} item={items.dofus6} />
      </div>
    </div>
  )
}

export default BuilderItemContainer
