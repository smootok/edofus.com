import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { ThemeProvider } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'

import theme from './theme'
import Home from './pages/home'
import Encyclopedia from './pages/encyclopedia'
import PageNotFound from './pages/404'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/encyclopedia/:type(equipment|weapons)'>
          <Encyclopedia />
        </Route>
        <Route path='*'>
          <PageNotFound />
        </Route>
      </Switch>
    </ThemeProvider>
  )
}

export default App
