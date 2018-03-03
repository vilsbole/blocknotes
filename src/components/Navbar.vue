<template>
  <nav class="navbar-container">
  {{ msg }}
  &nbsp;&nbsp;
    <div v-if="signedIn()">
      <span>{{ name() }}</span>
      <button v-on:click="signout">Signout</button>
    </div>
    <div v-else>
      <button v-on:click="signin">Signin</button>
    </div>
  </nav>
</template>

<script>
import store from '../services/store'

export default {
  name: 'Navbar',
  data () {
    return {
      msg: 'Welcome to Your Navbar App'
    }
  },
  methods: {
    name: function () {
      if (store.auth.isSignedIn()) {
        return store.auth.person.name()
      } else {
        return ''
      }
    },
    signedIn: function (event) {
      return store.auth.isSignedIn()
    },
    signout: function (event) {
      return store.auth.signout()
    },
    signin: function (event) {
      return store.auth.signin()
    }
  },
  components: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .navbar-container {
    background-color: red;
  }
</style>
