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
  const effects = {}
  for (const type in currentBuild) {
    if (currentBuild[type] && currentBuild[type].effects) {
      for (const effect of currentBuild[type].effects) {
        const effectName = effect.text.includes('%') ? `${effect.name}-percentage` : effect.name
        effects[effectName] = effects[effectName]
          ? effects[effectName] + (effect.end || effect.start || 0)
          : effect.end || effect.start || 0
      }
    }
  }
  for (const key in currentBuild.baseStats) {
    const value = currentBuild.baseStats[key]
    if (effects[key] && value) {
      effects[key] = effects[key] + parseInt(value)
    }
  }
  for (const key in currentBuild.scrolls) {
    const value = currentBuild.scrolls[key]
    if (effects[key] && value) {
      effects[key] = effects[key] + parseInt(value)
    }
  }
  return effects
}
