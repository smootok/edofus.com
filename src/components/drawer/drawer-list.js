import React from 'react'
import { List } from '@material-ui/core'

import DrawerItem from './drawer-item'

const DrawerList = ({ items, selectedItem, setSelectedItem }) => {
  return (
    <List>
      {items.map(({ name, icon }) => (
        <DrawerItem
          key={name}
          name={name}
          icon={icon}
          setSelectedItem={setSelectedItem}
          selectedItem={selectedItem}
        />
      ))}
    </List>
  )
}

export default DrawerList
