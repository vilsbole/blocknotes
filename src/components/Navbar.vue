<template>
  <nav class="navbar-container navbar navbar-light bg-light">
    <router-link class="navbar-brand brand" to="/">
      Blocknotes
    </router-link>
    <div v-show="isAuth" class="dropdown" >
      <div
        class="dropdown-toggle btn btn-link"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        id="dropdownMenuButton">
        {{ userName }}
      </div>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a class="dropdown-item"
          @click="signOut">
          Logout
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
import Auth from '@/services/auth.service'

export default {
  name: 'Navbar',
  props: ['isAuth', 'userName'],
  methods: {
    signOut: Auth.signOut,
  },
}
</script>

<style scoped>
.navbar-container {
  background-color: #E91E63 !important;
}
.brand {
  color: #fff !important;
}
</style>
