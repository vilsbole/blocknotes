<template>
  <div class="content">
    <h3> {{ msg.title }}</h3>
    <div v-html="msg.content">
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
  components: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .notes-list-container {
    background-color: green;
  }
  .content{
    padding: 20px;
    height: 100%;
    background-color: #fff;
  }
</style>
