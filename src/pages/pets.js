import React from 'react'
import { useLocation } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, CircularProgress } from '@material-ui/core'

import Layout from '../components/layout/layout'
import ItemSearch from '../components/item/item-search'
import ItemCardList from '../components/item/item-card-list'
import { apiBaseUrl } from '../config'
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

const Pets = () => {
  const classes = useStyles()
  const { pathname, data: builderConfig } = useLocation()
  const url = `${apiBaseUrl}${pathname}`
  const initParams = builderConfig
    ? { 'type[in]': [...builderConfig.filterTypes], page: 1 }
    : { page: 1 }

  const [{ data, isLoading, isError }, setFetchParams] = useApiData(url, {
    ...initParams
  })

  const handleScroll = () => {
    if (
      isLoading ||
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight
    ) {
      return
    }
    setFetchParams(params => ({ ...params, page: params.page + 1 }))
  }

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll) // eslint-disable-next-line
  }, [])

  return (
    <Layout>
      <div className={classes.root}>
        <ItemSearch setFetchParams={setFetchParams} />

        <ItemCardList items={data} />

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

export default Pets
