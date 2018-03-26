<template>
   <div class="note-container">
    <div class="text-muted text-center">
      <small>{{ dataNote._updated | humanReadable }}</small>
      <small
        class="btn btn-link"
        style="font-size: 80%"
        @click="deleteNote(noteId)">delete</small>
    </div>
    <quill-editor
      v-model="displayedNote"
      :options="quillOptions"
      @ready="onEditorReady($event)">
    </quill-editor>
   </div>
 </template>

<script>
import MarkdownShortcuts from 'quill-markdown-shortcuts-for-vue-quill-editor'
import _debounce from 'lodash.debounce'
import { Quill, quillEditor } from 'vue-quill-editor'
import 'quill/dist/quill.bubble.css'

import { NotesStorage, NotesService } from '@/services/notes.service'

export default {
  name: 'NotesEdit',
  props: [ 'noteId' ],
  components: {
    quillEditor
  },
  created () {
    /* Allow Quill to interpret and render markdown while typing */
    Quill.register('modules/markdownShortcuts', MarkdownShortcuts)
  },
  watch: {
    noteId: {
      /* Trigger handler on create: https://forum.vuejs.org/t/watchers-not-triggered-on-initialization/12475 */
      immediate: true,
      async handler (newId) {
        let note = await NotesService.get(newId)
        this.dataNote = note
        this.displayedNote = note.title.concat(note.content)
      }
    }
  },
  data () {
    return {
      dataNote: {},
      displayedNote: '',
      quillOptions: {
        theme: 'bubble',
        toolbar: false,
        modules: {
          markdownShortcuts: {},
        },
        placeholder: 'Untitled'
      },
    }
  },
  methods: {
    /*
      On Quill initialisation, set listeners:
      - that formats the title
      - deletes item when text is empty
      - that updates local and remote on change
    */
    onEditorReady (quill) {
      quill.on('text-change', (delta, oldDelta, source) => {
        quill.formatLine(1, 2, 'header', 1)
        if (source === 'user' && quill.root.innerText.length < 2) {
          this.deleteNote(this.noteId)
        } else if (source === 'user') {
          this.updateNote(quill)
        }
      })
    },

    updateNote: _debounce(function (quill) {
      return NotesService.createOrUpdate({
        ...this.dataNote,
        title: this.extractTitle(quill),
        content: this.extractBody(quill.root.innerHTML)
      })
    }, 500),

    deleteNote (noteId) {
      return NotesService.delete(noteId)
        .then(() => {
          const { id } = NotesStorage.notes[0]
          this.$router.push(`/notes/${id}`)
        })
    },

    /*
     Remove first line from content to create the body.
     We can't rely on parsing Bolts because <ul> tag disapears
    */
    extractBody (html) {
      return html.replace(/^(<h1>.*?<\/h1>)/, '')
    },

    extractTitle (quill) {
      const firstBlot = quill.getLine(0)[0]
      return firstBlot.domNode.innerText
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .note-container{
    height: 100%;
    background-color: #fff;
    padding: 0.5em;
  }
</style>
