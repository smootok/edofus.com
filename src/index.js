import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { CookiesProvider } from 'react-cookie'
import { StoreProvider } from './store'

import App from './app'

ReactDOM.render(
  <StoreProvider>
    <Router>
      <CookiesProvider>
        <App />
      </CookiesProvider>
    </Router>
  </StoreProvider>,
  document.getElementById('root')
)
