import React from 'react'
import { Grid } from '@material-ui/core'

import EquipmentCard from './equipment-card'

const EquipmentCardList = ({ equipments }) => {
  return (
    <div>
      <Grid container spacing={6}>
        {equipments.map(equipment => (
          <EquipmentCard key={equipment._id} {...equipment} />
        ))}
      </Grid>
    </div>
  )
}

export default EquipmentCardList
