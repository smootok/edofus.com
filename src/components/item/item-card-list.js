import React from 'react'
import { Grid } from '@material-ui/core'

import ItemCard from './item-card'

const ItemCardList = ({ items }) => {
  return (
    <div>
      <Grid container spacing={6}>
        {items.map(item => (
          <ItemCard key={item._id} item={item} />
        ))}
      </Grid>
    </div>
  )
}

export default ItemCardList
