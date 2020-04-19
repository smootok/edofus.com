import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { ThemeProvider } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'

import theme from './theme'
import Home from './pages/home'
import SignIn from './pages/sign-in'
import SignUp from './pages/sign-up'
import Equipment from './pages/equipment'
import Weapons from './pages/weapons'
import Pets from './pages/pets'
import Builder from './pages/builder'
import PageNotFound from './pages/404'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/sign-in'>
          <SignIn />
        </Route>
        <Route exact path='/sign-up'>
          <SignUp />
        </Route>
        <Route exact path='/builder'>
          <Builder />
        </Route>
        <Route exact path='/encyclopedia/equipment'>
          <Equipment />
        </Route>
        <Route exact path='/encyclopedia/weapons'>
          <Weapons />
        </Route>
        <Route exact path='/encyclopedia/pets'>
          <Pets />
        </Route>
        <Route path='*'>
          <PageNotFound />
        </Route>
      </Switch>
    </ThemeProvider>
  )
}

export default App
