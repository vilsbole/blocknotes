<template>
   <div class="note-container">
     <vue-editor
      class="editor"
      v-model="content">
    </vue-editor>
    <div class="save">
      <button
        @click="saveContent"
        class="btn btn-outline-secondary">
        Save
      </button>
    </div>
   </div>
 </template>

<script>
import { VueEditor } from 'vue2-editor'
import NoteService from '../services/notes.service'

export default {
  name: 'NotesEdit',
  props: [ 'notesId' ],
  data () {
    return {
      content: ''
    }
  },
  components: {
    VueEditor
  },
  methods: {
    saveContent: function () {
      // You have the content to save
      NoteService.create(this.content)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .note-container{
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: #fff;
  }
  .editor {
    flex: 1;
  }
  .save {
    margin: 1.5em 1em;
  }

</style>
