import * as blockstack from 'blockstack'

const USER = {}

/* Bridge for blockstack api */
const auth = {
  get username () {
    return USER.username
  },
  set username (name) {
    USER.username = name
  },
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
    auth.username = person._profile.username
  },
  fetchProfile: () => {
    return blockstack.loadUserData()
  },
  signOut: () => {
    const defaultPath = `${window.location.origin}/auth`
    auth.username = null
    blockstack.signUserOut(defaultPath)
  },
  signIn: () => {
    const redirectURI = `${window.location.origin}/notes/2`
    const manifestURI = `${window.location.origin}/manifest.json`
    return blockstack.redirectToSignIn(
      redirectURI,
      manifestURI,
    )
  }
}

export default auth
