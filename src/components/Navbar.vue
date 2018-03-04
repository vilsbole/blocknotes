<template>
  <nav class="navbar-container navbar navbar-expand-lg navbar-light bg-light">
    <router-link class="navbar-brand brand" to="/">
      Blocknotes
    </router-link>
    <div class="dropdown form-inline">
      <span>{{ username }}</span>
      <button
        v-on:click="signout"
        class="btn btn-link"
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
  data: () => {
    return {
      username: store.auth.person.name() || 'Anon'
    }
  },
  methods: {
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
.navbar-container {
  background-color: #E91E63 !important;
}
.brand {
  color: #fff !important;
}
</style>
