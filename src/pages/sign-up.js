import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { useCookies } from 'react-cookie'
import {
  Button,
  TextField,
  Typography,
  FormHelperText
} from '@material-ui/core'
import axios from 'axios'

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
    fontSize: 24
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
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2)
  },
  errorMessage: {
    textAlign: 'center',
    marginTop: 10,
    color: theme.palette.error.main
  }
}))

const SignUp = () => {
  const classes = useStyles()
  const [, setCookie] = useCookies(['jwt'])
  const { isLoggedIn, saveUser } = useUser()
  const [state, setState] = React.useState({
    username: '',
    email: '',
    password: ''
  })
  const [error, setError] = React.useState('')
  const history = useHistory()

  React.useLayoutEffect(() => {
    if (isLoggedIn) {
      history.push({ pathname: '/builder' })
    }
  }, [])

  React.useEffect(() => {
    document.title = 'edofus - Sign up'
  }, [])

  const handleChange = e => {
    const { name, value } = e.target
    setState(state => ({ ...state, [name]: value }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const url = `${apiBaseUrl}/users/sign-up`
      const response = await axios.post(url, state)
      setCookie('jwt', response.data.token, {
        expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000)
      })
      saveUser(response.data.data.user, response.data.token)
      setError('')
      history.push({ pathname: '/builder' })
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
              Create an account
            </Typography>
          </div>
          <FormHelperText className={classes.errorMessage}>
            {error}
          </FormHelperText>
          <div className={classes.inputs}>
            <TextField
              className={classes.input}
              required
              type='text'
              label='Username'
              variant='outlined'
              name='username'
              value={state.username}
              onChange={handleChange}
            />
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

          <Button
            className={classes.submitButton}
            variant='contained'
            color='primary'
            size='large'
            type='submit'
          >
            Sign up
          </Button>

          <Link className={classes.link} to='/sign-in'>
            <Typography variant='subtitle2' color='primary'>
              Already have an account?
            </Typography>
          </Link>
        </form>
      </div>
    </SignInSignUpLayout>
  )
}

export default SignUp
