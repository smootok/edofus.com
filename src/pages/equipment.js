import React, { useEffect } from 'react'
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
    marginTop: theme.spacing(4)
  },
  error: {
    color: theme.palette.error.main,
    textAlign: 'center',
    margin: theme.spacing(4)
  }
}))

const Encyclopedia = () => {
  const classes = useStyles()
  const url = `${baseApiUrl}/encyclopedia/equipment`
  const [{ data, isLoading, isError }, setParams] = useApiData(url)

  const handleScroll = () => {
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
    return () => window.removeEventListener('scroll', handleScroll) // eslint-disable-next-line
  }, [])

  return (
    <Layout>
      <div className={classes.root}>
        <EncyclopediaSearch
          setParams={setParams}
          encyclopediaType='equipment'
        />

        <EncyclopediaCardList encyclopediaType='equipment' data={data} />

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
