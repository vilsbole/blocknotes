import * as blockstack from 'blockstack'

const store = {
  auth: {
    loadUserData: function () {
      var userData = blockstack.loadUserData()
      var profile = userData.profile
      var person = new blockstack.Person(profile)
      this.person = person
    },
    isSignInPending: function () {
      blockstack.handlePendingSignIn().then(function (userData) {
        var profile = userData.profile
        var person = new blockstack.Person(profile)
        store.auth.person = person
      })
    },
    isSignedIn: function () {
      if (blockstack.isUserSignedIn()) {
        return true
      } else if (blockstack.isSignInPending()) {
        return this.isSignInPending()
      } else {
        return false
      }
    },
    signout: function (event) {
      blockstack.signUserOut(`${window.location.origin}/#/auth`)
    },
    signin: function (event) {
      if (!this.isSignedIn()) {
        blockstack.redirectToSignIn()
      }
    }
  },
  name: 'test'
}
export default store
