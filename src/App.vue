<template>
<div id="app">
    <navbar :user-name="userName" :is-auth="isAuth"/>
    <router-view></router-view>
</div>
</template>

<script>
import Auth from '@/services/auth.service'
import Navbar from '@/components/Navbar'

export default {
  name: 'App',
  components: {
    Navbar
  },
  computed: {
    isAuth: Auth.isSignedIn,
    userName () { return Auth.username }
  }
}
</script>

<style>
html, body, #app {
  height: 100%;
  font-family: 'Source Code Pro', monospace;
  font-size: 14px;
}

#app {
  display: flex;
  flex-direction: column;
  justify-content: start;
}
</style>
