<template>
  <div class="notes-show-container">
    <div class="header">
      <div v-html="compiled(title)"></div>
      <router-link
        class="btn btn-outline-secondary float-right"
        :to="`/notes/${notesId}/edit`">
        Edit
      </router-link>
    </div>
    <div class="desc">
      <div v-html="compiled(desc)"></div>
    </div>
    <div class="content">
      <div v-html="compiled(content)"></div>
    </div>
  </div>
</template>

<script>
import Marked from 'marked'
import NoteService from '@/services/notes.service'

export default {
  name: 'NotesShow',
  props: [ 'notesId' ],
  data () {
    const msg = NoteService.get(this.notesId)
    return {
      title: msg.title,
      desc: msg.desc,
      content: msg.content
    }
  },
  watch: {
    notesId: function (newVal, oldVal) {
      const msg = NoteService.get(newVal)
      this.title = msg.title
      this.desc = msg.desc
      this.content = msg.content
    }
  },
  methods: {
    compiled (raw) {
      return Marked(raw, { sanitize: true })
    }
  }
}
</script>

<style scoped>
  .notes-show-container {
    position: relative;
    padding: 2em;
  }
  .header {
    margin: 0.5em 0;
    height: 3em;
  }
  .content {
    /* padding: 20px; */
    height: 100%;
    background-color: #fff;
  }
</style>
