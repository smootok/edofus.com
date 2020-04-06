import React from 'react'
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'

import { imagesBaseUrl } from '../../config'

const useStyles = makeStyles(theme => ({
  root: {
    cursor: 'pointer',
    width: 60,
    height: 60,
    border: `1px solid ${theme.palette.text.secondary}`,
    borderRadius: 4,
    backgroundColor: theme.palette.background.paper,
    backgroundSize: 'cover',
    backgroundImage: props => `url(${imagesBaseUrl}/builder/${props.imgName})`,
    '&:hover': {
      borderColor: theme.palette.primary.main
    }
  }
}))

const BuilderItem = ({ config }) => {
  const classes = useStyles({ imgName: config.imgName })
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
