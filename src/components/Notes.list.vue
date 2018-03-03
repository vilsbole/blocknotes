<template>
  <div class="notes-list-container">
    {{ msg }}
    <pre>
      {{notes}}
    </pre>
    <button class="btn btn-default" type="submit">Button</button>
  </div>
</template>

<script>

export default {
  name: 'NotesList',
  props: ['notes'],
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
