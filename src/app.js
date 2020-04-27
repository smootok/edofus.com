import React from 'react'
import { Switch, Route } from 'react-router-dom'
import axios from 'axios'
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
import { apiBaseUrl } from './config'
import useUser from './hooks/use-user'
import { useCookies } from 'react-cookie'

const App = () => {
  const { saveUser } = useUser()
  const [cookie] = useCookies(['jwt'])

  const isLoggedIn = async () => {
    if (!cookie.jwt) return
    try {
      const url = `${apiBaseUrl}/users/is-logged-in`
      const headers = { authorization: `Bearer ${cookie.jwt}` }
      const response = await axios.post(url, {}, headers)
      if (response.data.status === 'success') {
        saveUser(response.data.data.user, response.data.token)
      }
    } catch (err) {
      console.log(err)
    }
  }

  React.useEffect(() => {
    isLoggedIn()
  }, [])

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
