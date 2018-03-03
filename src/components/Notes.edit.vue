<template>
  <div class="notes-list-container content">
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
  .content{
    padding: 20px;
    height: 100%;
    background-color: #fff;
  }
</style>
