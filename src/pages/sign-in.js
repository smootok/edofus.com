import React from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles'
import {
  Button,
  TextField,
  Typography,
  FormHelperText,
  CircularProgress
} from '@material-ui/core'

import SignInSignUpLayout from '../components/sign-in-sign-up/sign-in-sign-up-layout'
import ForgotPassword from '../components/sign-in-sign-up/forgot-password'
import { apiBaseUrl } from '../config'
import useUser from '../hooks/use-user'

const useStyles = makeStyles(theme => ({
  heading: {
    textAlign: 'center'
  },
  title: {
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(1),
    fontSize: 28
  },
  subtitle: {
    color: theme.palette.grey[500],
    [theme.breakpoints.down('xs')]: {
      fontSize: 14
    }
  },
  inputs: {
    marginTop: theme.spacing(3)
  },
  input: {
    width: '100%',
    marginBottom: theme.spacing(2)
  },
  link: {
    textDecoration: 'none',
    display: 'inline-block'
  },
  submitButton: {
    width: '100%',
    margin: theme.spacing(2, 0)
  },
  needAccount: {
    display: 'inline-block',
    marginRight: 4,
    color: theme.palette.grey[500]
  },
  errorMessage: {
    textAlign: 'center',
    marginTop: 10,
    color: theme.palette.error.main
  },
  successMessage: {
    textAlign: 'center',
    marginTop: 10,
    color: theme.palette.primary.main
  },
  forgotPassword: {
    cursor: 'pointer'
  },
  loading: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(4)
  }
}))

const SignIn = () => {
  const classes = useStyles()
  const [, setCookie] = useCookies(['jwt'])
  const [state, setState] = React.useState({ email: '', password: '' })
  const [isLoading, setIsLoading] = React.useState(false)
  const [error, setError] = React.useState('')
  const { isLoggedIn, saveUser } = useUser()
  const [openForgotPassword, setOpenForgotPassword] = React.useState(false)
  const [isForgotPasswordError, setIsForgotPasswordError] = React.useState(null)
  const { message } = useLocation()

  const history = useHistory()

  React.useLayoutEffect(() => {
    if (isLoggedIn) {
      history.push({ pathname: '/' })
    }
  }, [])

  React.useEffect(() => {
    document.title = 'edofus - Sign in'
  }, [])

  const handleOpenForgotPassword = () => {
    setOpenForgotPassword(true)
  }
  const handleCloseForgotPassword = () => {
    setOpenForgotPassword(false)
  }

  const handleChange = e => {
    const { name, value } = e.target
    setState(state => ({ ...state, [name]: value }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      setIsLoading(true)
      const url = `${apiBaseUrl}/users/sign-in`
      const response = await axios.post(url, state)
      if (response.data.status === 'success') {
        setCookie('jwt', response.data.token, {
          expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000)
        })
        saveUser(response.data.data.user, response.data.token)
        setError('')
        history.push({ pathname: '/' })
      }
    } catch (err) {
      setError(err.response.data.message)
    }
    setIsLoading(false)
  }

  return (
    <SignInSignUpLayout>
      <div className={classes.root}>
        <form onSubmit={handleSubmit} autoComplete='off'>
          <div className={classes.heading}>
            <Typography className={classes.title} variant='h4'>
              Welcome back!
            </Typography>
            <Typography className={classes.subtitle} variant='subtitle1'>
              We're so excited to see you again!
            </Typography>
          </div>
          <FormHelperText className={classes.errorMessage}>
            {error}
          </FormHelperText>
          {isForgotPasswordError === true && (
            <FormHelperText className={classes.errorMessage}>
              There was an error sending the email. Try again later!
            </FormHelperText>
          )}
          {isForgotPasswordError === false && (
            <FormHelperText className={classes.successMessage}>
              Reset password link sent to your email!
            </FormHelperText>
          )}
          {message && (
            <FormHelperText className={classes.successMessage}>
              {message}
            </FormHelperText>
          )}
          <div className={classes.inputs}>
            <TextField
              className={classes.input}
              required
              type='email'
              label='Email'
              variant='outlined'
              name='email'
              value={state.email}
              onChange={handleChange}
            />
            <TextField
              className={classes.input}
              required
              type='password'
              label='Password'
              variant='outlined'
              name='password'
              value={state.password}
              onChange={handleChange}
            />
          </div>
          <>
            <Typography
              className={classes.forgotPassword}
              onClick={handleOpenForgotPassword}
              variant='subtitle2'
              color='primary'
            >
              Forgot Password?
            </Typography>
            <ForgotPassword
              open={openForgotPassword}
              setIsForgotPasswordError={setIsForgotPasswordError}
              handleClose={handleCloseForgotPassword}
            />
          </>
          <Button
            className={classes.submitButton}
            variant='contained'
            color='primary'
            size='large'
            type='submit'
          >
            Sign in
          </Button>
          <Typography variant='subtitle2' className={classes.needAccount}>
            Need an account?
          </Typography>
          <Link className={classes.link} to='/sign-up'>
            <Typography variant='subtitle2' color='primary'>
              Sign up
            </Typography>
          </Link>
          {isLoading && (
            <div className={classes.loading}>
              <CircularProgress />
            </div>
          )}
        </form>
      </div>
    </SignInSignUpLayout>
  )
}

export default SignIn
