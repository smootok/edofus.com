import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles'
import {
  Button,
  TextField,
  Typography,
  FormHelperText
} from '@material-ui/core'

import SignInSignUpLayout from '../components/sign-in-sign-up/sign-in-sign-up-layout'
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
  }
}))

const SignIn = () => {
  const classes = useStyles()
  const [, setCookie] = useCookies(['jwt'])
  const [state, setState] = React.useState({ email: '', password: '' })
  const [error, setError] = React.useState('')
  const { isLoggedIn, saveUser } = useUser()

  const history = useHistory()

  React.useLayoutEffect(() => {
    if (isLoggedIn) {
      history.push({ pathname: '/builder' })
    }
  }, [])

  React.useEffect(() => {
    document.title = 'edofus - Sign in'
  }, [])

  const handleChange = e => {
    const { name, value } = e.target
    setState(state => ({ ...state, [name]: value }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const url = `${apiBaseUrl}/users/sign-in`
      const response = await axios.post(url, state)
      if (response.data.status === 'success') {
        setCookie('jwt', response.data.token, {
          expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000)
        })
        saveUser(response.data.data.user, response.data.token)
        setError('')
        history.push({ pathname: '/builder' })
      }
    } catch (err) {
      setError(err.response.data.message)
    }
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

          <Typography variant='subtitle2' color='primary'>
            Forget Password?
          </Typography>

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
        </form>
      </div>
    </SignInSignUpLayout>
  )
}

export default SignIn
