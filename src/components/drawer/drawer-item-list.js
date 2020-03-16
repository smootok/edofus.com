import React from 'react'
import { List } from '@material-ui/core'

import DrawerItem from './drawer-item'

const DrawerItemList = ({ items, setCurrentPage }) => {
  return (
    <List>
      {items.map(item => (
        <DrawerItem
          key={item.name}
          item={item}
          setCurrentPage={setCurrentPage}
        />
      ))}
    </List>
  )
}

export default DrawerItemList
