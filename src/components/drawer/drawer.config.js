import equipmentsIcon from '../../assets/icons/equipments.png'
import weaponsIcon from '../../assets/icons/weapons.png'
import setsIcon from '../../assets/icons/sets.png'
import classesIcon from '../../assets/icons/classes.png'
import createStuffIcon from '../../assets/icons/create-stuff.png'
import myStuffsIcon from '../../assets/icons/my-stuffs.png'
import HomeIcon from '../../assets/icons/dofus.png'

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
      },
      {
        name: 'Set',
        link: '/encyclopedia/set',
        icon: setsIcon
      },
      {
        name: 'Classes',
        link: '/encyclopedia/classes',
        icon: classesIcon
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
