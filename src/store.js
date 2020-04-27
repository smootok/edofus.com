import React from 'react'

const StoreContext = React.createContext()
const initialState = { user: {}, token: null, isLoggedIn: false }

const reducer = (state, action) => {
  switch (action.type) {
    case 'SAVE_USER':
      return {
        user: action.user,
        token: action.token,
        isLoggedIn: true
      }
    case 'REMOVE_USER':
      return {
        user: {},
        isLoggedIn: false
      }
    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  )
}

export const useStore = () => React.useContext(StoreContext)
