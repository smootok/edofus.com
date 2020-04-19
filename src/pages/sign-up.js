import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { Button, TextField, Typography } from '@material-ui/core'

import SignInSignUpLayout from '../components/sign-in-sign-up/sign-in-sign-up-layout'

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
  }
}))

const SignIn = () => {
  const classes = useStyles()

  const [state, setState] = React.useState({
    username: '',
    email: '',
    password: ''
  })

  React.useEffect(() => {
    document.title = 'edofus - Sign up'
  })

  const handleChange = e => {
    const { name, value } = e.target
    setState(state => ({ ...state, [name]: value }))
  }

  const handleSubmit = e => {
    e.preventDefault()
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
          >
            Sign in
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

export default SignIn
