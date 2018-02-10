<template>
<section id="home" class="container my-4">
    <div class="row justify-content-center text-center">
        <div class="row">
            <div class="col-lg-8 mx-auto text-center">
                <h2 class="section-heading">We'd love you're feedback!</h2>
                <hr class="primary">
                <p>{{contactUs}}</p>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12 text-center">
                <i class="fa fa-envelope fa-3x sr-contact"></i>
                <p>
                    <a target="_blank" class="btn btn-default btn-xl js-scroll-trigger" href="https://www.meetup.com/preview/Brighton-Blockchain-Meetup">Brighton Blockchain Meetup</a>
                </p>
            </div>
        </div>
    </div>
</section>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      contactUs: 'We are Home this site and have ambitious plans for building decentralised applications. If you\'d like to get involved please contact us through the meetup site.'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
    font-weight: normal;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>
