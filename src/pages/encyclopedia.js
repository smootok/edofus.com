import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, CircularProgress } from '@material-ui/core'

import Layout from '../components/layout/layout'
import EncyclopediaSearch from '../components/encyclopedia/encyclopedia-search'
import EncyclopediaCardList from '../components/encyclopedia/encyclopedia-card-list'
import { baseApiUrl } from '../config'
import useApiData from '../hooks/use-api-data'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  loading: {
    display: 'flex',
    justifyContent: 'center',
    margin: theme.spacing(4)
  },
  error: {
    color: theme.palette.error.main,
    textAlign: 'center',
    margin: theme.spacing(4)
  }
}))

const Encyclopedia = () => {
  const classes = useStyles()
  const { type } = useParams()
  const url = `${baseApiUrl}/encyclopedia/${type}`
  const [{ data, isLoading, isError }, setParams] = useApiData(url)

  function handleScroll () {
    if (
      isLoading ||
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight
    ) {
      return
    }
    setParams(params => ({ ...params, page: params.page + 1 }))
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Layout>
      <div className={classes.root}>
        <EncyclopediaSearch />
        <EncyclopediaCardList data={data} />
        {isLoading && (
          <div className={classes.loading}>
            <CircularProgress />
          </div>
        )}
        {isError && (
          <div className={classes.error}>
            <Typography className={classes.error}>
              Something wrong, Please try again
            </Typography>
          </div>
        )}
      </div>
    </Layout>
  )
}

export default Encyclopedia
