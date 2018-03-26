<template>
  <div class="row no-gutters">
    <notes-list
      class="col-4 col-lg-3 sidebar"
      :notes="store.notes">
    </notes-list>
    <router-view class="col" />
  </div>
</template>

<script>
import NotesList from '@/components/Notes.list'
import { User } from '@/services/auth.service'
import { NotesStorage, NotesService } from '@/services/notes.service'

export default {
  name: 'Home',
  components: {
    NotesList
  },
  async created () {
    /* User is initilized by router guards */
    await NotesService.init(User.username)
    await NotesService.getAll()
    this.redirectToFirstNote()
  },
  data () {
    return {
      store: NotesStorage
    }
  },
  methods: {
    redirectToFirstNote () {
      const first = NotesStorage.notes[0]
      const url = first
        ? `/notes/${first.id}`
        : `/notes/${NotesService.createTemp().id}`
      return this.$router.replace(url)
    }
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
