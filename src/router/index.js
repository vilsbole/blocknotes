import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/Home.vue'
import Register from '../components/Register.vue'
import NotesEdit from '../components/Notes.edit'
import NotesShow from '../components/Notes.show'
import store from '../services/store.service'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      meta: { requiresAuth: true },
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
    }, {
      path: '/auth',
      name: 'register',
      component: Register,
    }, {
      path: '*',
      redirect: '/auth'
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (store.auth.isSignedIn()) {
    store.auth.loadUserData()
    
    next()
  } else if (store.auth.isSignInPending()) {
    next()
  } else {
    next()
  }
})

export default router
