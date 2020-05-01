import React from 'react'
import axios from 'axios'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import {
  Button,
  Dialog,
  DialogTitle as MuiDialogTitle,
  DialogContent as MuiDialogContent,
  DialogActions as MuiDialogActions,
  TextField,
  Typography,
  IconButton,
  CircularProgress
} from '@material-ui/core'

import { Close as CloseIcon } from '@material-ui/icons'

import { apiBaseUrl } from '../../config'

const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2)
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  }
})

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose, ...other } = props
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant='h6'>{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label='close'
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  )
})

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  }
}))(MuiDialogContent)

const DialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1)
  }
}))(MuiDialogActions)

const useStyles = makeStyles(theme => ({
  loading: {
    display: 'flex',
    justifyContent: 'center',
    margin: theme.spacing(2)
  }
}))
const ForgotPassword = ({ open, setIsForgotPasswordError, handleClose }) => {
  const classes = useStyles()
  const [email, setEmail] = React.useState('')
  const [isLoading, setIsLoading] = React.useState(false)
  const handleChange = e => {
    setEmail(e.target.value)
  }

  const handleResetPassword = async () => {
    try {
      setIsLoading(true)
      const url = `${apiBaseUrl}/users/forgot-password`
      const protocol = window.location.protocol
      const hostname = window.location.hostname
      const port = window.location.port === 80 ? '' : `:${window.location.port}`
      const baseUrl = `${protocol}//${hostname}${port}`
      const response = await axios.post(url, { email, baseUrl })
      if (response.data.status === 'success') {
        setIsForgotPasswordError(false)
      }
    } catch (err) {
      setIsForgotPasswordError(true)
    }
    setIsLoading(false)
    handleClose()
  }

  return (
    <div>
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle onClose={handleClose}>Reset Password</DialogTitle>
        <DialogContent dividers>
          <TextField
            required
            type='email'
            label='Email'
            variant='outlined'
            name='email'
            value={email}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleResetPassword} color='primary'>
            Reset Password
          </Button>
        </DialogActions>
        {isLoading && (
          <div className={classes.loading}>
            <CircularProgress />
          </div>
        )}
      </Dialog>
    </div>
  )
}

export default ForgotPassword
