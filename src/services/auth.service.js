import * as blockstack from 'blockstack'

/* Bridge for blockstack api */
const auth = {
  user: {},
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
    this.user = new blockstack.Person(profile)
  },
  fetchProfile: () => {
    return blockstack.loadUserData()
  },
  signOut: () => {
    const defaultPath = `${window.location.origin}/auth`
    this.user = {}
    blockstack.signUserOut(defaultPath)
  },
  signIn: () => {
    const redirectURI = `${window.location.origin}/notes/1`
    const manifestURI = `${window.location.origin}/manifest.json`
    return blockstack.redirectToSignIn(
      redirectURI,
      manifestURI,
    )
  }
}

export default auth
