<template>
  <div class="notes-list-container">
    <div class="header content">
      <h3 class="float-left"> {{ msg.title }}</h3>
      <router-link :to="`/notes/${notesId}/edit`"
        class="btn btn-outline-secondary right">
        Edit
      </router-link>
    </div>
    <div class="content">
      <div v-html="msg.content">
      </div>
    </div>
  </div>

</template>

<script>
import NoteService from '../services/notes.service'

export default {
  name: 'NotesShow',
  props: [ 'notesId' ],
  data () {
    return {
      msg: NoteService.get(this.notesId)
    }
  },
  watch: {
    notesId: function (newVal, oldVal) {
      this.msg = NoteService.get(newVal)
    }
  },
}
</script>

<style scoped>
  .notes-list-container {
    position: relative;
  }
  .content{
    padding: 20px;
    height: 100%;
    background-color: #fff;
  }
  .header {
    margin: 0.5em 0;
    height: 3em;
  }
  .right {
    position: absolute;
    top: 20px;
    right: 20px;
  }
</style>
