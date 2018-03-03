<template>
  <div class="home-container">
    <notes-list class="sidebar" :notes="notes"></notes-list>
    <router-view class="main"></router-view>
  </div>
</template>

<script>
import NotesList from './Notes.list'
import NoteService from '../services/notes.service'

export default {
  name: 'Home',
  components: {
    NotesList
  },
  data () {
    return {
      msg: 'Welcome to Blockstack Notes',
      notes: NoteService.get()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home-container {
  background-color: blue;
  display: flex;
}
.sidebar {
  flex: 1;
}
.main {
  flex: 3;
}
</style>
