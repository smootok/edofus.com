import { useStore } from '../store'

const useUser = () => {
  const { state, dispatch } = useStore()
  return {
    user: state.user,
    token: state.token,
    isLoggedIn: state.isLoggedIn,
    saveUser: (user, token) => dispatch({ type: 'SAVE_USER', user, token }),
    removeUser: () => dispatch({ type: 'REMOVE_USER' })
  }
}

export default useUser
