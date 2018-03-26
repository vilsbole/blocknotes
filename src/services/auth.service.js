import * as blockstack from 'blockstack'

export const User = {
  isAuth: false,
  username: '',
  profile: {}
}

/* Bridge for blockstack api */
export const Auth = {
  isSignedIn: () => {
    return blockstack.isUserSignedIn()
  },
  isSignInPending: () => {
    return blockstack.isSignInPending()
  },
  handlePending: () => {
    return blockstack.handlePendingSignIn()
  },
  updateProfile: (profile) => {
    const person = new blockstack.Person(profile)
    User.isAuth = true
    User.username = person._profile.username
  },
  fetchProfile: () => {
    return blockstack.loadUserData()
  },
  signOut: () => {
    const defaultPath = `${window.location.origin}/auth`
    User.isAuth = false
    User.username = null
    blockstack.signUserOut(defaultPath)
  },
  signIn: () => {
    const redirectURI = `${window.location.origin}/notes`
    const manifestURI = `${window.location.origin}/manifest.json`
    return blockstack.redirectToSignIn(
      redirectURI,
      manifestURI,
    )
  }
}

export default Auth
