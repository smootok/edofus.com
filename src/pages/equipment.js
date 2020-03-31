import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, CircularProgress } from '@material-ui/core'

import Layout from '../components/layout/layout'
import EquipmentSearch from '../components/equipment/equipment-search'
import EquipmentCardList from '../components/equipment/equipment-card-list'
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

const Equipment = () => {
  const classes = useStyles()
  const url = `${apiBaseUrl}/encyclopedia/equipment`
  const [{ data, isLoading, isError }, setFetchParams] = useApiData(url, { page: 1 })

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
        <EquipmentSearch
          setFetchParams={setFetchParams}
        />

        <EquipmentCardList equipments={data} />

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

export default Equipment
