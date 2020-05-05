import React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import { makeStyles } from '@material-ui/core/styles'
import axios from 'axios'
import {
  TextField,
  FormHelperText,
  Button,
  CircularProgress
} from '@material-ui/core'

import Layout from '../components/layout/layout'
import useUser from '../hooks/use-user'
import { apiBaseUrl } from '../config'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    margin: theme.spacing(2, 0)
  },
  loading: {
    display: 'flex',
    justifyContent: 'center',
    margin: theme.spacing(2)
  },
  errorMessage: {
    textAlign: 'center',
    margin: theme.spacing(2),
    color: theme.palette.error.main
  }
}))

const Home = () => {
  const classes = useStyles()
  const [password, setPassword] = React.useState('')
  const { token } = useParams()
  const [error, setError] = React.useState()
  const [isLoading, setIsLoading] = React.useState(false)
  const [, setCookie] = useCookies(['jwt'])
  const { isLoggedIn, saveUser } = useUser()

  const history = useHistory()

  React.useLayoutEffect(() => {
    if (isLoggedIn) {
      history.push({ pathname: '/' })
    }
  }, [])

  const handleChange = e => {
    setPassword(e.target.value)
  }

  const handleClick = async () => {
    if (!password) return
    try {
      setIsLoading(true)
      const url = `${apiBaseUrl}/users/reset-password/${token}`
      const response = await axios.patch(url, { password })
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
    <Layout>
      <div className={classes.root}>
        <FormHelperText className={classes.errorMessage}>
          {error}
        </FormHelperText>
        <TextField
          className={classes.input}
          required
          type='password'
          label='New Password'
          variant='outlined'
          name='password'
          value={password}
          onChange={handleChange}
        />
        <Button
          className={classes.button}
          variant='contained'
          color='primary'
          size='large'
          onClick={handleClick}
        >
          Reset
        </Button>
        {isLoading && (
          <div className={classes.loading}>
            <CircularProgress />
          </div>
        )}
      </div>
    </Layout>
  )
}

export default Home
