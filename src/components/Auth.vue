<template>
<div class="auth">
<template v-if="supportsBlockstack">
  <template v-if="loggedIn">
        <li class="nav-item dropdown"><a v-on:click="logout">Welcome</a></li>
        <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><img v-bind:src="avatarUrl" class="rounded-circle avatar"> {{name}} <span class="caret"></span></a>
         <ul class="dropdown-menu">
            <li class="nav-item"><a id="signout" class="nav-link" href="#">Signout</a></li>
         </ul>
    </template>
    <template v-else>
        <li class="nav-item dropdown"><a v-on:click="login">Login</a></li>
    </template>
</template>
<template v-else>
  <li class="nav-item dropdown"><a href="https://blockstack.org" target="_blank" class="nav-link">Download Blockstack</a></li>
</template>
</div>
</template>

<script>
import * as blockstack from 'blockstack'
import axios from 'axios'

export default {
  name: 'Auth',
  data () {
    return {
      msg: 'Welcome to Your Navbar App',
      loggedIn: false,
      supportsBlockstack: this.isSupportsBlockstack(),
      avatarUrl: 'https://github.com/vuejs/Discussion/issues/202.png',
      name: 'first' + 'last'
    }
  },
  beforeCreate: function () {
    axios.get('http://localhost:6270/v1/ping')
      .then((resp) => {
        console.log('detected blockstack!')
        if (blockstack.isUserSignedIn()) {
          this.loggedIn = true
        } else if (blockstack.isSignInPending()) {
          blockstack.handlePendingSignIn().then(function (userData) {
            this.loggedIn = false
          })
        }
        this.supportsBlockstack = true
        return true
      })
      .catch((err) => {
        console.log(err)
        this.supportsBlockstack = false
        return false
      })
  },
  methods: {
    login: function (event) {
      blockstack.redirectToSignIn()
    },
    logout: function (event) {
      // `this` inside methods points to the Vue instance
      alert('Logout ' + this.msg + '!')
      this.loggedIn = false
      // `event` is the native DOM event
      if (event) {
        alert(event.target.tagName)
      }
    },
    isSupportsBlockstack: function (event) {
      console.log(blockstack)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
