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
    borderRadius: 10,
    border: `1px solid ${theme.palette.divider}`
  },
  category: {
    fontWeight: 500,
    fontSize: '1.2em',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    padding: theme.spacing(1),
    borderRadius: '10px 10px 0 0'
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

const Characteristic = ({ classes, name, imgSrc }) => {
  return (
    <div className={classes.characteristic}>
      <div className={classes.left}>
        <div className={classes.name}>{name}</div>
        <div className={classes.inputContainer}>
          <TextField
            id='outlined-basic'
            variant='outlined'
            size='small'
            type='number'
            value={0}
            className={classes.input}
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
            checked={false}
            color='primary'
            inputProps={{ 'aria-label': 'primary checkbox' }}
            className={classes.scrollCheckbox}
          />
        </div>
      </div>
    </div>
  )
}

const BuilderCharacteristics = ({ charcteristics }) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.category}>Characteristics</div>
      <Characteristic
        name='vitality'
        imgSrc={vitalityScrollImg}
        classes={classes}
      />
      <Characteristic
        name='wisdom'
        imgSrc={wisdomScrollImg}
        classes={classes}
      />
      <Characteristic
        name='strength'
        imgSrc={strengthScrollImg}
        classes={classes}
      />
      <Characteristic
        name='intelligence'
        imgSrc={intelligenceScrollImg}
        classes={classes}
      />
      <Characteristic
        name='chance'
        imgSrc={chanceScrollImg}
        classes={classes}
      />
      <Characteristic
        name='agility'
        imgSrc={agilityScrollImg}
        classes={classes}
      />
      <div className={classes.basePoints}>Base Points: 995</div>
    </div>
  )
}

export default BuilderCharacteristics
