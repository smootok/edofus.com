import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import theme from './theme'
import Layout from './components/layout/layout'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <h1>edofus</h1>
      </Layout>
    </ThemeProvider>
  )
}

export default App
