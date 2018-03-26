<template>
  <div id="app">
    <navbar :user-name="user.username" :is-auth="user.isAuth"/>
    <router-view class="main-container"></router-view>
  </div>
</template>

<script>
import { User } from '@/services/auth.service'
import Navbar from '@/components/Navbar'
import './app.scss'

export default {
  name: 'App',
  components: {
    Navbar
  },
  data () {
    return {
      user: User,
    }
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
  overflow: hidden;
}
.main-container {
  flex: 1
}
</style>
