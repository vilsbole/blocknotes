<template>
  <div class="notes-list-container">
    {{ msg }}
  </div>
</template>

<script>

export default {
  name: 'NotesList',
  data () {
    return {
      msg: 'Notes list'
    }
  },
  components: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .notes-list-container {
    background-color: purple;
  }
</style>
