<template>
  <div class="notes-list-container">
    {{ msg }}
    {{ notesId }}
  </div>
</template>

<script>

export default {
  name: 'NotesEdit',
  props: [ 'notesId' ],
  data () {
    return {
      msg: 'Notes Edit'
    }
  },
  components: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .notes-list-container {
    background-color: yellow;
  }
</style>
