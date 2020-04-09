import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'

import { imagesBaseUrl } from '../../config'

const useStyles = makeStyles(theme => ({
  root: {
    cursor: 'pointer',
    width: 70,
    height: 70,
    border: `1px solid ${theme.palette.text.secondary}`,
    borderRadius: 4,
    backgroundColor: theme.palette.background.paper,
    backgroundSize: 'cover',
    backgroundImage: props => props.currentItemBuild
      ? `url(${imagesBaseUrl}/encyclopedia/${props.config.encyclopediaType}/${props.currentItemBuild.itemId}.png)`
      : `url(${imagesBaseUrl}/builder/${props.config.imgName})`,
    '&:hover': {
      borderColor: theme.palette.primary.main
    }
  }
}))

const BuilderItem = ({ config, currentItemBuild }) => {
  const { pathname } = useLocation()
  const classes = useStyles({ config, pathname, currentItemBuild })
  const history = useHistory()

  const handleClick = () => {
    history.push({
      pathname: `/encyclopedia/${config.encyclopediaType}`,
      data: { builderMode: true, ...config }
    })
  }

  return <div className={`${classes.root}`} onClick={handleClick} />
}

export default BuilderItem
