<template>
<div id="app">
    <navbar />
    <router-view></router-view>
</div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  name: 'App',
  components: {
    Navbar
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
