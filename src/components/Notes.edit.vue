<template>
   <div class="content">
     <vue-editor v-model="content"></vue-editor>
     <button @click="saveContent" class="btn"> Save </button>
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
  .content{
    height: 100%;
    background-color: #fff;
  }
</style>
