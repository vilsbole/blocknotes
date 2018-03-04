<template>
  <div class="notes-list-container">
    <div class="preview-container list-group list-group-flush">
      <router-link
        v-for="note in notes"
        :to="`/notes/${note.id}`"
        :key="note.id"
        tag="a"
        href="#"
        active-class="active"
        exact
        class="list-group-item list-group-item-action flex-column align-items-start">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1 text-truncate">{{ note.title }}</h5>
          </div>
          <p class="mb-1 note-preview">{{ note.desc | truncate }}</p>
      </router-link>
    </div>
    <div class="footer">
      <router-link
        class="btn btn-outline-primary"
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
  data: () => {
    return {
      lines: 2
    }
  },
  props: ['notes'],
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #create-button{
    width: 100%;
  }
  .list-group-item{
    height: 7em;
  }
  .notes-list-container {
    height: 100%;
    position: relative;
    border-right: 1px solid rgba(0,0,0,.125);
    /*
      CSS vodoo magic, requires min-width to set on flex-child elem when using a nested 'no-wrap'
      ie. https://css-tricks.com/flexbox-truncated-text/
    */
    min-width: 0;
  }
  .footer {
    margin: 1.5em 1em;
    position: absolute;
    bottom: 0;
    left: 20%;
    width: 50%;
  }
  .note-preview {
    margin-bottom: 0.5em;
  }
</style>
