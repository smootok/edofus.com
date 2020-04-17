export const calcBasePoints = currentBuild => {
  let basePoints = currentBuild.level > 1 ? currentBuild.level * 5 - 5 : 0
  for (const key in currentBuild.baseStats) {
    const value = parseInt(currentBuild.baseStats[key])
    if (key === 'vitality') {
      basePoints = basePoints - value
    } else if (key === 'wisdom') {
      basePoints = basePoints - value * 3
    } else {
      if (value <= 100) {
        basePoints = basePoints - value
      } else if (value <= 200) {
        basePoints = basePoints - (value - 100) * 2 - 100
      } else if (value > 200) {
        basePoints = basePoints - (value - 200) * 3 - 100 * 2 - 100
      }
    }
  }
  return basePoints
}

export const calcEffects = currentBuild => {
  const effects = {
    vitality: 50,
    ap: 6,
    mp: 3,
    summons: 1,
    prospecting: 100,
    pods: 1000
  }

  for (const type in currentBuild) {
    if (currentBuild[type] && currentBuild[type].effects) {
      for (const effect of currentBuild[type].effects) {
        const effectName = effect.text.includes('%')
          ? `${effect.name}-percentage`
          : effect.name
        effects[effectName] = effects[effectName]
          ? effects[effectName] + (effect.end || effect.start || 0)
          : effect.end || effect.start || 0
      }
    }
  }
  for (const key in currentBuild.baseStats) {
    const value = parseInt(currentBuild.baseStats[key])
    if (!isNaN(value)) {
      effects[key] = effects[key] + value || value
    }
  }
  for (const key in currentBuild.scrolls) {
    const value = parseInt(currentBuild.scrolls[key])
    if (!isNaN(value)) {
      effects[key] = effects[key] + value || value
    }
  }
  effects.vitality = effects.vitality + (currentBuild.level - 1) * 5

  if (currentBuild.level >= 100) {
    effects.ap = effects.ap + 1
  }
  if (effects.chance) {
    effects.prospecting = effects.prospecting + effects.chance
  }

  effects.initiative =
    (effects.initiative || 0) +
    (effects.chance || 0) +
    (effects.strength || 0) +
    (effects.agility || 0) +
    (effects.intelligence || 0)

  if (effects.wisdom >= 10) {
    effects['ap-reduction'] =
      (effects['ap-reduction'] || 0) + Math.floor(effects.wisdom / 10)
    effects['mp-reduction'] =
      (effects['mp-reduction'] || 0) + Math.floor(effects.wisdom / 10)
    effects['ap-parry'] =
      (effects['ap-parry'] || 0) + Math.floor(effects.wisdom / 10)
    effects['mp-parry'] =
      (effects['mp-parry'] || 0) + Math.floor(effects.wisdom / 10)
  }

  if (effects.strength) {
    effects.pods = effects.pods + (effects.strength * 5)
  }

  return effects
}
