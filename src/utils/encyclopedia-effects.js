const effects = {
  common: [
    {
      name: 'vitality',
      text: 'Vitality',
      css: {
        backgroundPosition: '0 -304px'
      }
    },
    {
      name: 'ap',
      text: 'AP',
      css: {
        backgroundPosition: '0 -228px'
      }
    },
    {
      name: 'mp',
      text: 'MP',
      css: {
        backgroundPosition: '0 -37px'
      }
    },
    {
      name: 'initiative',
      text: 'Initiative',
      css: {
        backgroundPosition: '0 -190px'
      }
    },
    {
      name: 'prospecting',
      text: 'Prospecting',
      css: {
        backgroundPosition: '0 -264px'
      }
    },
    {
      name: 'range',
      text: 'Range',
      css: {
        backgroundPosition: '0 -113px'
      }
    },
    {
      name: 'summons',
      text: 'Summons',
      css: {
        backgroundPosition: '0 -493px'
      }
    }
  ],
  primary: [
    {
      name: 'wisdom',
      text: 'Wisdom',
      css: {
        backgroundPosition: '0 -343px'
      }
    },
    {
      name: 'strength',
      text: 'Strength',
      css: {
        backgroundPosition: '0 -417px'
      }
    },
    {
      name: 'intelligence',
      text: 'Intelligence',
      css: {
        backgroundPosition: '0 -379px'
      }
    },
    {
      name: 'chance',
      text: 'Chance',
      css: {
        backgroundPosition: '0 -74px'
      }
    },
    {
      name: 'agility',
      text: 'Agility',
      css: {
        backgroundPosition: '0 -152px'
      }
    }
  ],
  secondary: [
    {
      name: 'critical',
      text: 'Critical',
      css: {
        backgroundPosition: '0 -574px'
      }
    },
    {
      name: 'healing-done',
      text: 'Healing Done',
      css: {
        backgroundPosition: '0 -903px'
      }
    },
    {
      name: 'damage',
      text: 'Damage',
      css: {
        backgroundPosition: '0 -1141px'
      }
    },
    {
      name: 'power',
      text: 'Power',
      css: {
        backgroundPosition: '0 -1094px'
      }
    },
    {
      name: 'heals',
      text: 'Heals',
      css: {
        backgroundPosition: '0 -951px'
      }
    }
  ],
  other: [
    {
      name: 'lock',
      text: 'Lock',
      css: {
        backgroundPosition: '0 -531px'
      }
    },
    {
      name: 'dodge',
      text: 'Dodge',
      css: {
        backgroundPosition: '0 -452px'
      }
    },
    {
      name: 'ap-reduction',
      text: 'AP Reduction',
      css: {
        backgroundPosition: '0 -1282px'
      }
    },
    {
      name: 'mp-reduction',
      text: 'MP Reduction',
      css: {
        backgroundPosition: '0 -1325px'
      }
    },
    {
      name: 'ap-parry',
      text: 'AP Parry',
      css: {
        backgroundPosition: '0 -1049px'
      }
    },
    {
      name: 'mp-parry',
      text: 'MP Parry',
      css: {
        backgroundPosition: '0 -1001px'
      }
    },
    {
      name: 'trap-damage',
      text: 'Trap Damage',
      css: {
        backgroundPosition: '0 -697px'
      }
    },
    {
      name: 'trap-power',
      text: 'Trap Power',
      css: {
        backgroundPosition: '0 -658px'
      }
    },
    {
      name: 'pods',
      text: 'Pods',
      css: {
        backgroundPosition: '5px -1367px'
      }
    }
  ],
  damage: [
    {
      name: 'neutral-damage',
      text: 'Neutral Damage',
      css: {
        backgroundPosition: '0 0'
      }
    },
    {
      name: 'fire-damage',
      text: 'Fire Damage',
      css: {
        backgroundPosition: '0 -379px'
      }
    },
    {
      name: 'earth-damage,',
      text: 'Earth Damage',
      css: {
        backgroundPosition: '0 -417px'
      }
    },
    {
      name: 'water-damage',
      text: 'Water Damage',
      css: {
        backgroundPosition: '0 -74px'
      }
    },
    {
      name: 'spell-damage',
      text: 'Spell Damage',
      css: {
        backgroundPosition: '0 -615px'
      }
    },

    {
      name: 'weapon-damage',
      text: 'Weapon Damage',
      css: {
        backgroundPosition: '0 -615px'
      }
    },
    {
      name: 'melee-damage',
      text: 'Melee Damage',
      css: {
        backgroundPosition: '0 -615px'
      }
    },
    {
      name: 'distance-damage',
      text: 'Distance Damage',
      css: {
        backgroundPosition: '0 -615px'
      }
    },
    {
      name: 'ranged-damage',
      text: 'Ranged Damage',
      css: {
        backgroundPosition: '0 -615px'
      }
    },
    {
      name: 'critical-damage',
      text: 'Critical Damage',
      css: {
        backgroundPosition: '0 -1234px'
      }
    },
    {
      name: 'pushback-damage',
      text: 'Pushback Damage',
      css: {
        backgroundPosition: '0 -858px'
      }
    }
  ],
  resistance: [
    {
      name: 'neutral-resistance',
      text: 'Neutral Resistance',
      css: {
        backgroundPosition: '0 0'
      }
    },
    {
      name: 'fire-resistance',
      text: 'Fire Resistance',
      css: {
        backgroundPosition: '0 -379px'
      }
    },
    {
      name: 'earth-resistance',
      text: 'Earth Resistance',
      css: {
        backgroundPosition: '0 -417px'
      }
    },
    {
      name: 'water-resistance',
      text: 'Water Resistance',
      css: {
        backgroundPosition: '0 -74px'
      }
    },
    {
      name: 'air-resistance',
      text: 'Air Resistance',
      css: {
        backgroundPosition: '0 -152px'
      }
    },
    {
      name: 'spell-resistance',
      text: 'Spell Resistance',
      css: {
        backgroundPosition: '0 -1407px'
      }
    },
    {
      name: 'weapon-resistance',
      text: 'Weapon Resistance',
      css: {
        backgroundPosition: '0 -1407px'
      }
    },
    {
      name: 'melee-resistance',
      text: 'Melee Resistance',
      css: {
        backgroundPosition: '0 -1407px'
      }
    },
    {
      name: 'distance-resistance',
      text: 'Distance Resistance',
      css: {
        backgroundPosition: '0 -1407px'
      }
    },
    {
      name: 'ranged-resistance',
      text: 'Ranged Resistance',
      css: {
        backgroundPosition: '0 -1407px'
      }
    },
    {
      name: 'ap-resistance',
      text: 'AP Resistance',
      css: {
        backgroundPosition: '0 -1049px'
      }
    },
    {
      name: 'mp-resistance',
      text: 'MP Resistance',
      css: {
        backgroundPosition: '0 -1001px'
      }
    },
    {
      name: 'critical-resistance',
      text: 'Critical Resistance',
      css: {
        backgroundPosition: '0 -1185px'
      }
    },
    {
      name: 'pushback-resistance',
      text: 'Pushback Resistance',
      css: {
        backgroundPosition: '0 -817px'
      }
    }
  ],
  steal: [
    {
      name: 'neutral-steal',
      text: 'Neutral Steal',
      css: {
        backgroundPosition: '0 0'
      }
    },
    {
      name: 'fire-steal',
      text: 'Fire Steal',
      css: {
        backgroundPosition: '0 -379px'
      }
    },
    {
      name: 'earth-steal',
      text: 'Earth Steal',
      css: {
        backgroundPosition: ''
      }
    },
    {
      name: 'water-steal',
      text: 'Water Steal',
      css: {
        backgroundPosition: '0 -74px'
      }
    },
    {
      name: 'air-steal',
      text: 'Air Steal',
      css: {
        backgroundPosition: '0 -152px'
      }
    }
  ]
}

export default effects
