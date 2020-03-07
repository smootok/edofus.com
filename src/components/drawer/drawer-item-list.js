import React from 'react'
import { List } from '@material-ui/core'

import DrawerItem from './drawer-item'

const DrawerItemList = ({ items }) => {
  return (
    <List>
      {items.map(item => (
        <DrawerItem key={item.name} {...item} />
      ))}
    </List>
  )
}

export default DrawerItemList
