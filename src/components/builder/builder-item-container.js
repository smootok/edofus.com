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

const BuilderItemContainer = ({ builderConfig }) => {
  const classes = useStyles()
  const classImgUrl = 'https://api.edofus.com/images/classes/sram.png'

  return (
    <div className={classes.root}>
      <div className={classes.top}>
        <div className={classes.left}>
          <BuilderItem config={builderConfig.amulet} />
          <BuilderItem config={builderConfig.ring1} />
          <BuilderItem config={builderConfig.ring2} />
          <BuilderItem config={builderConfig.shield} />
          <BuilderItem config={builderConfig.weapon} />
        </div>
        <div className={classes.center}>
          <div className={classes.classImg}>
            <img src={classImgUrl} alt='' />
          </div>
        </div>
        <div className={classes.right}>
          <BuilderItem config={builderConfig.hat} />
          <BuilderItem config={builderConfig.cloak} />
          <BuilderItem config={builderConfig.belt} />
          <BuilderItem config={builderConfig.boots} />
          <BuilderItem config={builderConfig.pet} />
        </div>
      </div>
      <div className={classes.bottom}>
        <BuilderItem config={builderConfig.dofus1} />
        <BuilderItem config={builderConfig.dofus2} />
        <BuilderItem config={builderConfig.dofus3} />
        <BuilderItem config={builderConfig.dofus4} />
        <BuilderItem config={builderConfig.dofus5} />
        <BuilderItem config={builderConfig.dofus6} />
      </div>
    </div>
  )
}

export default BuilderItemContainer
