import React from 'react'
import { Switch, Route } from 'react-router-dom'
import axios from 'axios'
import { ThemeProvider } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'

import theme from './theme'
import Builder from './pages/builder'
import Builds from './pages/builds'
import SignIn from './pages/sign-in'
import SignUp from './pages/sign-up'
import ResetPassword from './pages/reset-password'
import Equipment from './pages/equipment'
import Weapons from './pages/weapons'
import Pets from './pages/pets'
import PageNotFound from './pages/404'
import { apiBaseUrl } from './config'
import useUser from './hooks/use-user'
import { useCookies } from 'react-cookie'

const App = () => {
  const { saveUser } = useUser()
  const [cookie] = useCookies(['jwt'])

  const authenticate = async () => {
    if (!cookie.jwt) return
    try {
      const url = `${apiBaseUrl}/users/authenticate`
      const headers = { authorization: `Bearer ${cookie.jwt}` }
      const response = await axios.post(url, {}, { headers })
      if (response.data.status === 'success') {
        saveUser(response.data.data.user, response.data.token)
      }
    } catch (err) {
      console.log(err)
    }
  }

  React.useEffect(() => {
    authenticate()
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Switch>
        <Route exact path='/'>
          <Builder />
        </Route>
        <Route exact path='/builds'>
          <Builds />
        </Route>
        <Route exact path='/sign-in'>
          <SignIn />
        </Route>
        <Route exact path='/sign-up'>
          <SignUp />
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
        <Route exact path='/reset-password/:token'>
          <ResetPassword />
        </Route>
        <Route path='*'>
          <PageNotFound />
        </Route>
      </Switch>
    </ThemeProvider>
  )
}

export default App
