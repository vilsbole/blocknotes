<template>
   <div class="note-container">
    <div class="content">
      <div class="header">
        <span class="title">
          <h3>
            <editable
              @editing="updateModel"
              :content="title"
              name="title">
            </editable>
            <button
              @click="saveContent(changed)"
              class="btn btn-outline-secondary right">
              Save
            </button>
          </h3>
        </span>
        <span>

        </span>
      </div>
      <div class="desc">
        <editable :content="desc"
         @editing="updateModel"
         name="desc">
       </editable>
      </div>
      <div class="">
        <editable :content="content"
         @editing="updateModel"
         name="content">
       </editable>
      </div>
    </div>
   </div>
 </template>

<script>

import NoteService from '../services/notes.service'
import Editable from './Editable'

export default {
  name: 'NotesEdit',
  props: [ 'notesId' ],
  data () {
    const note = NoteService.get(this.notesId)
    return {
      title: note.title || 'Title',
      desc: note.desc || 'Enter your description',
      content: note.content || 'Write your note',
      changed: {}
    }
  },
  components: {
    Editable
  },
  methods: {
    saveContent: (note) => {
      // You have the content to save
      console.log(note)
      NoteService.create(note)
    },
    updateModel: function (params) {
      this.$data.changed[params.name] = params.value
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
    position: relative;
  }
  .editor {
    flex: 1;
  }
  .save {
    margin: 1.5em 1em;
  }
  .content{
    padding: 20px;
  }
  .header {
    margin: 0.5em 0;
    height: 3em;
  }
  .title {
    width: 70%;
  }
  .right {
    position: absolute;
    top: 20px;
    right: 20px;
  }

</style>
