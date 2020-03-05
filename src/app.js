import React from 'react'

import { ThemeProvider } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'

import theme from './theme'
import Encyclopedia from './pages/encyclopedia'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Encyclopedia />
    </ThemeProvider>
  )
}

export default App
