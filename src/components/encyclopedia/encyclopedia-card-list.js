import React from 'react'

import { Grid } from '@material-ui/core'

import EncyclopediaCard from './encyclopedia-card'

const EncyclopediaCardList = ({ data }) => {
  return (
    <div>
      <Grid container spacing={6}>
        {data.map(item => (
          <EncyclopediaCard key={item._id} {...item} />
        ))}
      </Grid>
    </div>
  )
}

export default EncyclopediaCardList
