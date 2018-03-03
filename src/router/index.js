import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/Home.vue'
import NotesEdit from '../components/Notes.edit'
import NotesShow from '../components/Notes.show'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/notes/create',
          component: NotesEdit
        },
        {
          path: '/notes/:notesId',
          component: NotesShow,
          props: true

        },
        {
          path: '/notes/:notesId/edit',
          component: NotesEdit,
          props: true
        }
      ]
    }
  ]
})
