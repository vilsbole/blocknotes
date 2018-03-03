<template>
  <nav class="navbar-container navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">{{ msg }}</a>
    <div class="dropdown form-inline">
      <button class="btn btn-primpary" type="button" id="logoutButton">
        Logout
      </button>
    </div>
  </nav>
</template>

<script>

export default {
  name: 'Navbar',
  data () {
    return {
      msg: 'Welcome to Blockstack Notes',
      username: 'username'
    }
  },
  components: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
