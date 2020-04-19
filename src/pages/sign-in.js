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
  }
}))

const SignIn = () => {
  const classes = useStyles()

  const [state, setState] = React.useState({ email: '', password: '' })

  React.useEffect(() => {
    document.title = 'edofus - Sign in'
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
              Welcome back!
            </Typography>
            <Typography className={classes.subtitle} variant='subtitle1'>
              We're so excited to see you again!
            </Typography>
          </div>

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
