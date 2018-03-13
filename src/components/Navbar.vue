<template>
  <nav class="navbar-container navbar navbar-light bg-light">
    <router-link class="navbar-brand brand" to="/">
      Blocknotes
    </router-link>
    <div v-show="isAuth" class="dropdown form-inline float-right">
      <span>{{ userName }}</span>
      <button
        @click="signOut"
        class="btn btn-link"
        type="button">
        Logout
      </button>
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
