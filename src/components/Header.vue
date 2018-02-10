<template>
<nav class="navbar navbar-toggleable-md navbar-expand-lg navbar-light fixed-top" id="mainNav">
    <div class="container">
        <a class="navbar-brand js-scroll-trigger" href="/#api/start">Brighton Blockchain</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#contact">Contact</a></li>
                <li class="nav-item"><a class="nav-link js-scroll-trigger" href="/#api/articles">Posts</a></li>
                <li class="nav-item dropdown"><a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Explore <span class="caret"></span></a>
                    <ul class="dropdown-menu">
                        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="/#api/bitcoin">bitcoin</a></li>
                        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="/#api/blockstack">blockstack</a></li>
                        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="/#api/storage">storage</a></li>
                    </ul></li>
                <li class="nav-item dropdown" id="authRegion"></li>
            </ul>
        </div>
    </div>
</nav>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      message: 'Building Decentralised Applications'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
