export const builderConfig = {
  hat: {
    name: 'hat',
    imgName: 'hat.png',
    encyclopediaType: 'equipment',
    filterTypes: ['Hat']
  },
  cloak: {
    name: 'cloak',
    imgName: 'cloak.png',
    encyclopediaType: 'equipment',
    filterTypes: ['Cloak']
  },
  belt: {
    name: 'belt',
    imgName: 'belt.png',
    encyclopediaType: 'equipment',
    filterTypes: ['Belt']
  },
  boots: {
    name: 'boots',
    imgName: 'boots.png',
    encyclopediaType: 'equipment',
    filterTypes: ['Boots']
  },
  amulet: {
    name: 'amulet',
    imgName: 'amulet.png',
    encyclopediaType: 'equipment',
    filterTypes: ['Amulet']
  },
  ring1: {
    name: 'ring1',
    imgName: 'ring.png',
    encyclopediaType: 'equipment',
    filterTypes: ['Ring']
  },
  ring2: {
    name: 'ring2',
    imgName: 'ring.png',
    encyclopediaType: 'equipment',
    filterTypes: ['Ring']
  },
  weapon: {
    name: 'weapon',
    imgName: 'weapon.png',
    encyclopediaType: 'weapons',
    filterTypes: []
  },
  shield: {
    name: 'shield',
    imgName: 'shield.png',
    encyclopediaType: 'equipment',
    filterTypes: ['Shield']
  },
  pet: {
    name: 'pet',
    imgName: 'pet.png',
    encyclopediaType: 'pets',
    filterTypes: ['Pet', 'Petsmount', 'Mounts']
  },
  dofus1: {
    name: 'dofus1',
    imgName: 'dofus.png',
    encyclopediaType: 'equipment',
    filterTypes: ['Dofus', 'Trophy']
  },
  dofus2: {
    name: 'dofus2',
    imgName: 'dofus.png',
    encyclopediaType: 'equipment',
    filterTypes: ['Dofus', 'Trophy']
  },
  dofus3: {
    name: 'dofus3',
    imgName: 'dofus.png',
    encyclopediaType: 'equipment',
    filterTypes: ['Dofus', 'Trophy']
  },
  dofus4: {
    name: 'dofus4',
    imgName: 'dofus.png',
    encyclopediaType: 'equipment',
    filterTypes: ['Dofus', 'Trophy']
  },
  dofus5: {
    name: 'dofus5',
    imgName: 'dofus.png',
    encyclopediaType: 'equipment',
    filterTypes: ['Dofus', 'Trophy']
  },
  dofus6: {
    name: 'dofus6',
    imgName: 'dofus.png',
    encyclopediaType: 'equipment',
    filterTypes: ['Dofus', 'Trophy']
  }
}

export const initItems = Object.keys(builderConfig).map(key => ({
  [key]: null
}))
