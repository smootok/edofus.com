import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import { imagesBaseUrl } from '../../config'
import BuildItemTooltip from './build-item-tooltip'

const useStyles = makeStyles(theme => ({
  root: {
    width: 42,
    height: 42,
    border: `1px solid ${theme.palette.text.secondary}`,
    borderRadius: 4,
    backgroundColor: theme.palette.background.paper,
    backgroundSize: 'cover',
    backgroundImage: props =>
      props.buildItem
        ? `url(${imagesBaseUrl}/encyclopedia/${props.config.encyclopediaType}/${props.buildItem.itemId}.png)`
        : `url(${imagesBaseUrl}/builder/${props.config.imgName})`,
    '&:hover': {
      borderColor: theme.palette.primary.main
    }
  }
}))

const BuildItem = ({ config, buildItem }) => {
  const classes = useStyles({ config, buildItem })

  return (
    <BuildItemTooltip
      config={config}
      buildItem={buildItem}
      placement={config.placement}
    >
      <div className={`${classes.root}`} />
    </BuildItemTooltip>
  )
}

export default BuildItem
