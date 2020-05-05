import equipmentsIcon from '../../assets/drawer/equipments.png'
import weaponsIcon from '../../assets/drawer/weapons.png'
import petsIcon from '../../assets/drawer/pets.png'
import builderIcon from '../../assets/drawer/builder.png'
import savedBuildsIcon from '../../assets/drawer/saved-builds.png'

const config = [
  {
    title: 'Tools',
    items: [
      {
        name: 'Builder',
        link: '/',
        icon: builderIcon
      },
      {
        name: 'Saved Builds',
        link: '/builds',
        icon: savedBuildsIcon
      }
    ]
  },
  {
    title: 'Encyclopedia',
    items: [
      {
        name: 'Equipment',
        link: '/encyclopedia/equipment',
        icon: equipmentsIcon
      },
      {
        name: 'Weapons',
        link: '/encyclopedia/weapons',
        icon: weaponsIcon
      },
      {
        name: 'Pets',
        link: '/encyclopedia/pets',
        icon: petsIcon
      }
    ]
  }
]

export default config
