<template>
<section id="contact" class="container my-4">
    <div class="row justify-content-center text-center">
        <div class="row">Contact</div>
    </div>
</section>
</template>

<script>
export default {
  name: 'Contact',
  data () {
    return {
      contactUs: 'We are bootstrapping this site and have ambitious plans for building decentralised applications. If you\'d like to get involved please contact us through the meetup site.'
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
