<template>
  <div class="bd-callout">
    <p>
      {{ msg }}
      {{ notesId }}
    </p>
  </div>
</template>

<script>

export default {
  name: 'NotesShow',
  props: [ 'notesId' ],
  data () {
    return {
      msg: get(notesId)
    }
  },
  components: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .notes-list-container {
    background-color: green;
  }
  p{
    padding: 20px;
    height: 100%;
    background-color: #fff;
  }
</style>
