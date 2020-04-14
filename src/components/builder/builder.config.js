export const classesConfig = [
  'cra',
  'ecaflip',
  'eliotrope',
  'eniripsa',
  'enutrof',
  'feca',
  'foggernaut',
  'huppermage',
  'iop',
  'masqueraider',
  'osamoda',
  'ouginak',
  'pandawa',
  'rogue',
  'sacri',
  'sadida',
  'sram',
  'xelor'
]

export const builderConfig = {
  level: null,
  classType: null,
  baseStats: null,
  scrolls: null,
  weapon: {
    name: 'weapon',
    imgName: 'weapon.png',
    encyclopediaType: 'weapons',
    placement: 'right',
    filterTypes: [
      'Axe',
      'Bow',
      'Dagger',
      'Hammer',
      'Pickaxe',
      'Scythe',
      'Shovel',
      'Soul stone',
      'Staff',
      'Sword',
      'Tool',
      'Wand'
    ]
  },
  hat: {
    name: 'hat',
    imgName: 'hat.png',
    encyclopediaType: 'equipment',
    placement: 'left-start',
    filterTypes: ['Hat']
  },
  cloak: {
    name: 'cloak',
    imgName: 'cloak.png',
    encyclopediaType: 'equipment',
    placement: 'left-start',
    filterTypes: ['Cloak']
  },
  belt: {
    name: 'belt',
    imgName: 'belt.png',
    encyclopediaType: 'equipment',
    placement: 'left-start',
    filterTypes: ['Belt']
  },
  boots: {
    name: 'boots',
    imgName: 'boots.png',
    encyclopediaType: 'equipment',
    placement: 'left-start',
    filterTypes: ['Boots']
  },
  amulet: {
    name: 'amulet',
    imgName: 'amulet.png',
    encyclopediaType: 'equipment',
    placement: 'right-start',
    filterTypes: ['Amulet']
  },
  ring1: {
    name: 'ring1',
    imgName: 'ring.png',
    encyclopediaType: 'equipment',
    placement: 'right-start',
    filterTypes: ['Ring']
  },
  ring2: {
    name: 'ring2',
    imgName: 'ring.png',
    encyclopediaType: 'equipment',
    placement: 'right-start',
    filterTypes: ['Ring']
  },
  shield: {
    name: 'shield',
    imgName: 'shield.png',
    encyclopediaType: 'equipment',
    placement: 'right-start',
    filterTypes: ['Shield']
  },
  pet: {
    name: 'pet',
    imgName: 'pet.png',
    encyclopediaType: 'pets',
    placement: 'left',
    filterTypes: ['Pet', 'Petsmount', 'Mounts']
  },
  dofus1: {
    name: 'dofus1',
    imgName: 'dofus.png',
    encyclopediaType: 'equipment',
    placement: 'bottom',
    filterTypes: ['Dofus', 'Trophy']
  },
  dofus2: {
    name: 'dofus2',
    imgName: 'dofus.png',
    encyclopediaType: 'equipment',
    placement: 'bottom',
    filterTypes: ['Dofus', 'Trophy']
  },
  dofus3: {
    name: 'dofus3',
    imgName: 'dofus.png',
    encyclopediaType: 'equipment',
    placement: 'bottom',
    filterTypes: ['Dofus', 'Trophy']
  },
  dofus4: {
    name: 'dofus4',
    imgName: 'dofus.png',
    encyclopediaType: 'equipment',
    placement: 'bottom',
    filterTypes: ['Dofus', 'Trophy']
  },
  dofus5: {
    name: 'dofus5',
    imgName: 'dofus.png',
    encyclopediaType: 'equipment',
    placement: 'bottom',
    filterTypes: ['Dofus', 'Trophy']
  },
  dofus6: {
    name: 'dofus6',
    imgName: 'dofus.png',
    encyclopediaType: 'equipment',
    placement: 'bottom',
    filterTypes: ['Dofus', 'Trophy']
  }
}

const builderItems = Object.keys(builderConfig).reduce(
  (acc, key) => ({
    ...acc,
    [key]: null
  }),
  {}
)

export const initBuild = {
  ...builderItems,
  level: 200,
  classType: classesConfig[Math.floor(Math.random(classesConfig.length) * 10)],
  baseStats: {
    vitality: 0,
    wisdom: 0,
    strength: 0,
    intelligence: 0,
    chance: 0,
    agility: 0
  },
  scrolls: {
    vitality: 0,
    wisdom: 0,
    strength: 0,
    intelligence: 0,
    chance: 0,
    agility: 0
  }
}
