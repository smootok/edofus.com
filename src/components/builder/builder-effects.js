import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

import effectsSprite from '../../assets/effects-sprite.png'
import { effectsConfig } from '../item/item.config'

const builderEffectsStyles = (theme, effectsConfig) => {
  const styles = {
    root: {
      maxWidth: 300,
      border: `1px solid ${theme.palette.divider}`,
      margin: 'auto'
    },
    section: {
      marginBottom: theme.spacing(3)
    },
    category: {
      backgroundColor: 'rgba(0, 0, 0, 0.4)'
    },
    categoryHeading: {
      fontWeight: 500,
      fontSize: '1.2em'
    },
    effect: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: theme.spacing(1, 1),
      '&:nth-child(even)': {
        backgroundColor: theme.palette.background.default
      }
    },
    left: {
      display: 'flex'
    },
    icon: {
      width: 24,
      height: 24,
      background: `transparent url(${effectsSprite}) 0 -1387px no-repeat`,
      marginRight: theme.spacing(1)
    },
    value: {
      fontWeight: 700,
      marginRight: theme.spacing(1)
    }
  }
  for (const key in effectsConfig) {
    for (const effectConfig of effectsConfig[key]) {
      const { name, css } = effectConfig
      styles.icon[`&.${name}`] = {
        backgroundPosition: css.backgroundPosition
      }
    }
  }
  return styles
}

const useStyles = makeStyles(theme =>
  builderEffectsStyles(theme, effectsConfig)
)

const BuilderEffectsSection = ({
  effects,
  category,
  effectsConfig,
  panel,
  expanded,
  handleChange
}) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <ExpansionPanel expanded={expanded[panel] || false} onChange={() => handleChange(panel)}>
        <ExpansionPanelSummary
          className={classes.category}
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography className={classes.categoryHeading}>
            {category}
          </Typography>
        </ExpansionPanelSummary>
        {effectsConfig.map(effect => (
          <ExpansionPanelDetails className={classes.effect} key={effect.name}>
            <div className={classes.left}>
              <i className={`${classes.icon} ${effect.name}`} />
              <div className={classes.name}>{effect.text}</div>
            </div>
            <div className={classes.right}>
              <div className={classes.value}>
                {effects[effect.name] || 0}
                {effect.name.includes('percentage') && '%'}
              </div>
            </div>
          </ExpansionPanelDetails>
        ))}
      </ExpansionPanel>
    </div>
  )
}

const BuilderEffects = ({ effects }) => {
  const [expanded, setExpanded] = React.useState({ panel1: true })

  const handleChange = panel => {
    setExpanded(expanded => ({
      ...expanded,
      [panel]: !expanded[panel]
    }))
  }

  return (
    <>
      {Object.keys(effectsConfig).map((key, index) => (
        <BuilderEffectsSection
          key={key}
          effects={effects}
          category={key}
          effectsConfig={effectsConfig[key]}
          panel={`panel${index + 1}`}
          expanded={expanded}
          handleChange={handleChange}
        />
      ))}
    </>
  )
}

export default BuilderEffects
