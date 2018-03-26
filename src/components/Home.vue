<template>
  <div class="row no-gutters">
    <notes-list
      class="col-4 col-lg-3 sidebar"
      :notes="store.notes">
    </notes-list>
    <router-view
      class="col">
    </router-view>
  </div>
</template>

<script>
import NotesList from '@/components/Notes.list'
import { NotesService, NotesStorage } from '@/services/notes.service'
import { User } from '@/services/auth.service'

export default {
  name: 'Home',
  components: {
    NotesList
  },
  data () {
    return {
      store: NotesStorage
    }
  },
  beforeCreate () {
    NotesService.init(User.username)
    NotesService.getAll()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.sidebar {
  /* overflow-y: auto; */
  /* height: 90vh; */
}
</style>
