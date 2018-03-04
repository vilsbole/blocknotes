<template>
  <nav class="navbar-container navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">{{ msg }}</a>
    <div class="dropdown form-inline">
      <span>{{ name() }}</span>
      <button
        v-on:click="signout"
        class="btn btn-primpary"
        type="button"
        id="logoutButton">
        Logout
      </button>
    </div>
  </nav>
</template>

<script>
import store from '../services/store.service'

export default {
  name: 'Navbar',
  data () {
    return {
      msg: 'Blocknotes',
      username: 'username'
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
    signout: function (event) {
      return store.auth.signout()
    }
  },
  components: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
