<template>
  <div class="notes-list-container">
    <div class="preview-container list-group">
      <router-link
        :to="`/notes/${note.id}`"
        v-for="note in notes"
        :key="note.id"
        tag="a"
        href="#"
        class="list-group-item list-group-item-action flex-column align-items-start">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">{{note.title}} <small>{{note.id}}</small></h5>
          </div>
          <!-- <p class="mb-1">{{note.content}}</p> -->
      </router-link>
    </div>
    <div class="footer">
      <router-link
      class="btn btn-default"
      id="create-button"
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
  #create-button{
    width: 100%;
  }
  .list-group-item{
    height: 100px;
  }
</style>
