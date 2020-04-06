import equipmentsIcon from '../../assets/drawer/equipments.png'
import weaponsIcon from '../../assets/drawer/weapons.png'
import createStuffIcon from '../../assets/drawer/create-stuff.png'
import myStuffsIcon from '../../assets/drawer/my-stuffs.png'
import HomeIcon from '../../assets/dofus.png'

const config = [
  {
    title: 'Home',
    items: [
      {
        name: 'Home',
        link: '/',
        icon: HomeIcon
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
  },
  {
    title: 'Tools',
    items: [
      {
        name: 'Create Stuff',
        link: '/stuffs/builder',
        icon: createStuffIcon
      },
      {
        name: 'My Stuffs',
        link: '/stuffs',
        icon: myStuffsIcon
      }
    ]
  }
]

export default config
