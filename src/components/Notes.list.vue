<template>
  <div class="wrapper">
    <div class="notes-preview-container list-group list-group-flush">
      <router-link
        class="list-group-item list-group-item-action flex-column align-items-start"
        v-for="note in notes"
        :to="`/notes/${note.id}`"
        :key="note.id"
        tag="a"
        href="#"
        active-class="active"
        exact>
          <div class="d-flex w-100 justify-content-between">
            <div class="text-truncate note-title">{{ note.title || 'Untitled' }}</div>
            <div class="text-muted">{{ note._updated | since }}</div>
          </div>
          <div class="mb-1 note-preview"
            v-html="$options.filters.truncate(compiled(note.content))">
          </div>
      </router-link>
    </div>
    <div class="footer">
      <div
        class="btn btn-outline-primary btn-create"
        @click="createNewNote()"
        tag="button">
        New Note
      </div>
    </div>
  </div>
</template>

<script>
import Marked from 'marked'
import NotesService from '@/services/notes.service'

export default {
  name: 'NotesList',
  props: ['notes'],
  data: () => {
    return {
      lines: 2
    }
  },
  methods: {
    compiled (raw) {
      return raw ? Marked(raw) : ''
    },
    createNewNote () {
      let tmp = NotesService.createTemp()
      this.$router.push({ path: `/notes/${tmp.id}` })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapper {
  font-size: 12px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border-right: 1px solid rgba(0,0,0,.125);
  /*
  CSS vodoo magic, requires min-width to be set on flex-child elem when using a nested 'no-wrap'
  ie. https://css-tricks.com/flexbox-truncated-text/
  */
  min-width: 0;
}
.notes-preview-container {
  overflow: scroll;
  flex: 1;
}
.footer {
  height: 7em;
  width: 100%;
  display: flex;
  align-items: center;
  box-shadow: 0px -1px 3px #8080804f;
}
.btn-create {
  display: block;
  margin: auto;
}
.list-group-item {
  height: 7em;
  min-height: 7em;
}
.note-title {
  font-weight: bold;
  max-width: 80%;
}
/* Also used to target injected html through global style defined in app.scss */
.note-preview {
  width: calc(100% - 3em);
  position: absolute;
  clip: rect(auto, auto, 2.8em, auto); /* used to avoid overflow */
}
</style>
