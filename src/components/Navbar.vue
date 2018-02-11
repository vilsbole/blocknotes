<template>
<nav class="navbar navbar-toggleable-md navbar-expand-lg navbar-light fixed-top" id="mainNav">
  <div class="container">
    <a class="navbar-brand js-scroll-trigger" href="/#api/start">Brighton Blockchain</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarResponsive">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item"><router-link :to="{ name: 'Hello' }">Home</router-link></li>
        <li class="nav-item"><router-link to="/about">About</router-link></li>
        <li class="nav-item"><router-link to="/coins/ethereum">Ethereum</router-link></li>
        <li class="nav-item"><router-link to="/coins/bitcoin">Bitcoin</router-link></li>
        <li class="nav-item dropdown"><a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Explore <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li class="nav-item"><a class="nav-link js-scroll-trigger" href="/#api/bitcoin">bitcoin</a></li>
            <li class="nav-item"><a class="nav-link js-scroll-trigger" href="/#api/blockstack">blockstack</a></li>
            <li class="nav-item"><a class="nav-link js-scroll-trigger" href="/#api/storage">storage</a></li>
          </ul>
        </li>
        <auth></auth>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
import Auth from '@/components/Auth'
export default {
  name: 'Navbar',
  data () {
    return {
      msg: 'Welcome to Your Navbar App'
    }
  },
  components: {
    Auth
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #span {padding: "20px"}
</style>
