import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { TextField, Checkbox } from '@material-ui/core'

import vitalityScrollImg from '../../assets/builder/vitality-scroll.png'
import wisdomScrollImg from '../../assets/builder/wisdom-scroll.png'
import strengthScrollImg from '../../assets/builder/strength-scroll.png'
import intelligenceScrollImg from '../../assets/builder/intelligence-scroll.png'
import chanceScrollImg from '../../assets/builder/chance-scroll.png'
import agilityScrollImg from '../../assets/builder/agility-scroll.png'

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 300,
    border: `1px solid ${theme.palette.divider}`,
    margin: 'auto'
  },
  category: {
    fontWeight: 500,
    fontSize: '1.2em',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    // padding: theme.spacing(1),
    padding: '10px 24px 10px 24px'
  },
  characteristic: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: theme.spacing(0.2, 1),
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  left: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  name: {
    fontWeight: 'bold',
    width: 90
  },
  inputContainer: {
    maxWidth: 70,
    margin: 5
  },
  input: {
    width: '100%'
  },
  right: {
    display: 'flex',
    justifyItems: 'center',
    alignItems: 'center'
  },
  scrollImgContainer: {
    width: 30
  },
  scrollImg: {
    width: '100%'
  },
  basePoints: {
    padding: 10,
    fontWeight: 'bold',
    textAlign: 'center'
  }
}))

const Characteristic = ({
  classes,
  name,
  imgSrc,
  scrollsValue,
  handleScrollsChange,
  baseStatsValue,
  handleBaseStatsChange
}) => {
  return (
    <div className={classes.characteristic}>
      <div className={classes.left}>
        <div className={classes.name}>{name}</div>
        <div className={classes.inputContainer}>
          <TextField
            id='outlined-basic'
            variant='outlined'
            name={name}
            size='small'
            type='number'
            value={baseStatsValue}
            className={classes.input}
            onChange={handleBaseStatsChange}
          />
        </div>
      </div>
      <div className={classes.right}>
        <div className={classes.scrollImgContainer}>
          <img
            src={imgSrc}
            alt='agility-scroll'
            className={classes.scrollImg}
          />
        </div>
        <div className={classes.scrollCheckBoxContainer}>
          <Checkbox
            checked={scrollsValue === 101}
            name={name}
            color='primary'
            inputProps={{ 'aria-label': 'primary checkbox' }}
            className={classes.scrollCheckbox}
            onChange={handleScrollsChange}
          />
        </div>
      </div>
    </div>
  )
}

const BuilderCharacteristics = ({
  scrolls,
  baseStats,
  basePoints,
  handleBaseStatsChange,
  handleScrollsChange
}) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.category}>characteristics</div>
      <Characteristic
        name='vitality'
        imgSrc={vitalityScrollImg}
        classes={classes}
        baseStatsValue={baseStats.vitality}
        handleBaseStatsChange={handleBaseStatsChange}
        scrollsValue={scrolls.vitality}
        handleScrollsChange={handleScrollsChange}
      />
      <Characteristic
        name='wisdom'
        imgSrc={wisdomScrollImg}
        classes={classes}
        baseStatsValue={baseStats.wisdom}
        handleBaseStatsChange={handleBaseStatsChange}
        scrollsValue={scrolls.wisdom}
        handleScrollsChange={handleScrollsChange}
      />
      <Characteristic
        name='strength'
        imgSrc={strengthScrollImg}
        classes={classes}
        baseStatsValue={baseStats.strength}
        handleBaseStatsChange={handleBaseStatsChange}
        scrollsValue={scrolls.strength}
        handleScrollsChange={handleScrollsChange}
      />
      <Characteristic
        name='intelligence'
        imgSrc={intelligenceScrollImg}
        classes={classes}
        baseStatsValue={baseStats.intelligence}
        handleBaseStatsChange={handleBaseStatsChange}
        scrollsValue={scrolls.intelligence}
        handleScrollsChange={handleScrollsChange}
      />
      <Characteristic
        name='chance'
        imgSrc={chanceScrollImg}
        classes={classes}
        baseStatsValue={baseStats.chance}
        handleBaseStatsChange={handleBaseStatsChange}
        scrollsValue={scrolls.chance}
        handleScrollsChange={handleScrollsChange}
      />
      <Characteristic
        name='agility'
        imgSrc={agilityScrollImg}
        classes={classes}
        baseStatsValue={baseStats.agility}
        handleBaseStatsChange={handleBaseStatsChange}
        scrollsValue={scrolls.agility}
        handleScrollsChange={handleScrollsChange}
      />
      <div className={classes.basePoints}>Base Points: {basePoints}</div>
    </div>
  )
}

export default BuilderCharacteristics
