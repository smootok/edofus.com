import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import backgroundImg from '../../assets/sign-in-sign-up/background.jpg'

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `linear-gradient(
        105deg,
        ${theme.hexToRgba(theme.palette.background.default, 0.9)} 0%,
        ${theme.hexToRgba(theme.palette.background.default, 0.9)} 50%,
        transparent 50%
      ),
      url(${backgroundImg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  box: {
    width: '85%',
    maxWidth: 480,
    backgroundColor: theme.palette.background.default,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: theme.spacing(6),
    borderRadius: 5,
    boxShadow: theme.shadows[10]
  }
}))

const SignInSignUpLayout = ({ children }) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.box}>{children}</div>
    </div>
  )
}

export default SignInSignUpLayout
