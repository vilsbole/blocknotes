<template>
  <div class="notes-list-container">
    <div class="preview-container">
      <router-link
        :to="`/notes/${note.id}`"
        v-for="note in notes"
        :key="note.id"
        tag="div">
        {{note.id}}
        <h5>{{note.title}}</h5>
        <p>{{note.content}}</p>
      </router-link>
    </div>
    <div class="footer">
      <router-link
      class="btn btn-default"
      to="/notes/create"
      tag="button">
      Create
    </router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: 'NotesList',
  props: ['notes'],
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .notes-list-container {
    background-color: purple;
  }
</style>
