import equipmentsIcon from '../../assets/drawer/equipments.png'
import weaponsIcon from '../../assets/drawer/weapons.png'
import builderIcon from '../../assets/drawer/builder.png'
import savedBuildsIcon from '../../assets/drawer/saved-builds.png'
import homeIcon from '../../assets/dofus.png'

const config = [
  {
    title: 'Home',
    items: [
      {
        name: 'Home',
        link: '/',
        icon: homeIcon
      }
    ]
  },
  {
    title: 'Tools',
    items: [
      {
        name: 'Builder',
        link: '/builder',
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
      }
    ]
  }
]

export default config
