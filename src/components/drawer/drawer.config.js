import equipmentsIcon from '../../assets/drawer-icons/equipments.png'
import weaponsIcon from '../../assets/drawer-icons/weapons.png'
import setsIcon from '../../assets/drawer-icons/sets.png'
import classesIcon from '../../assets/drawer-icons/classes.png'
import createStuffIcon from '../../assets/drawer-icons/create-stuff.png'
import myStuffsIcon from '../../assets/drawer-icons/my-stuffs.png'

const config = [
  {
    title: 'Encyclopedia',
    items: [
      {
        name: 'Equipments',
        link: '/encyclopedia/equipments',
        icon: equipmentsIcon
      },
      {
        name: 'Weapons',
        link: '/encyclopedia/weapons',
        icon: weaponsIcon
      },
      {
        name: 'Sets',
        link: '/encyclopedia/sets',
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
