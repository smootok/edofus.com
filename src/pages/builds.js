import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography, CircularProgress, Button } from '@material-ui/core'
import { Add as AddIcon, AccountCircle as SignInIcon } from '@material-ui/icons'

import Layout from '../components/layout/layout'
import { apiBaseUrl } from '../config'
import { builderConfig } from '../components/builder/builder.config'

import useUser from '../hooks/use-user'
import Build from '../components/builds/build'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(12)
  },
  error: {
    color: theme.palette.error.main,
    textAlign: 'center',
    margin: theme.spacing(2)
  },
  loading: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(1)
  },
  message: {
    textAlign: 'center',
    margin: 'auto'
  }
}))

const Builds = () => {
  const classes = useStyles()
  const { isLoggedIn, token } = useUser()
  const [error, setError] = React.useState()
  const [data, setData] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(false)

  const history = useHistory()
  const getBuilds = async () => {
    if (!isLoggedIn) return
    setIsLoading(true)
    try {
      const url = `${apiBaseUrl}/builds?sort=-updatedAt`
      const headers = { authorization: `Bearer ${token}` }
      const response = await axios.get(url, { headers })
      setData(response.data.data)
    } catch (err) {
      setError(err.response.data.message)
    }
    setIsLoading(false)
  }

  React.useEffect(() => {
    getBuilds()
  }, [isLoggedIn])

  const handleRemoveBuild = async id => {
    if (!isLoggedIn) {
      history.push({
        pathname: '/sign-in',
        message: 'Please sign-in to remove your build'
      })
    }
    setIsLoading(true)
    try {
      const url = `${apiBaseUrl}/${id}`
      const headers = { authorization: `Bearer ${token}` }
      await axios.delete(url, { headers })
      await getBuilds()
    } catch (err) {
      setError(err.response.data.message)
    }
    setIsLoading(false)
  }

  const handleEditBuild = async build => {
    if (!isLoggedIn) {
      history.push({
        pathname: '/sign-in',
        message: 'Please sign-in to edit your build'
      })
    }
    history.push({
      pathname: '/',
      build
    })
  }

  return (
    <Layout>
      <div className={classes.root}>
        <Typography className={classes.error}>{error}</Typography>
        <Grid container spacing={2}>
          {!isLoggedIn && !isLoading && (
            <div className={classes.message}>
              <Typography>Sign in to access to your builds space</Typography>
              <Link to='/sign-in' style={{ textDecoration: 'none' }}>
                <Button
                  variant='contained'
                  color='primary'
                  style={{ marginTop: 10 }}
                >
                  <SignInIcon style={{ marginRight: 4 }} /> Sign in
                </Button>
              </Link>
            </div>
          )}

          {isLoggedIn && !isLoading && data.length === 0 && (
            <div className={classes.message}>
              <Typography>You don't have any saved build</Typography>
              <Link to='/' style={{ textDecoration: 'none' }}>
                <Button
                  variant='contained'
                  color='primary'
                  style={{ marginTop: 10 }}
                >
                  <AddIcon style={{ marginRight: 4 }} /> Create new build
                </Button>
              </Link>
            </div>
          )}

          {data.map(build => (
            <Build
              key={build._id}
              build={{
                ...JSON.parse(build.build),
                name: build.name,
                id: build._id,
                userId: build.user._id
              }}
              handleRemoveBuild={handleRemoveBuild}
              handleEditBuild={handleEditBuild}
              config={builderConfig}
            />
          ))}
        </Grid>
        {isLoading && (
          <div className={classes.loading}>
            <CircularProgress />
          </div>
        )}
      </div>
    </Layout>
  )
}

export default Builds
