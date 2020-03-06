import React from 'react'

import { Grid } from '@material-ui/core'

import ENCYCLOPEDIA_DATA from '../../assets/equipment.json'
import EncyclopediaCard from './encyclopedia-card'

const EncyclopediaCardList = () => {
  return (
    <div>
      <Grid container spacing={6}>
        {ENCYCLOPEDIA_DATA.slice(0, 300).map(item => (
          <EncyclopediaCard key={item.id} {...item} />
        ))}
      </Grid>
    </div>
  )
}

export default EncyclopediaCardList
