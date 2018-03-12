import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/Home.vue'
import Register from '../components/Register.vue'
import NotesEdit from '../components/Notes.edit'
import NotesShow from '../components/Notes.show'
import Auth from '@/services/auth.service'

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
      redirect: '/'
    }
  ]
})

router.beforeResolve((to, from, next) => {
  if (to.meta.requiresAuth) {
    if (Auth.isSignedIn()) {
      const profile = Auth.fetchProfile()
      Auth.updateProfile(profile)
      next()
    } else if (Auth.isSignInPending()) {
      debugger
      Auth.handlePending()
        .then(({ profile }) => { Auth.updateProfile(profile) })
        .then(next)
    } else {
      next('/#/auth')
    }
  } else {
    next()
  }
})

export default router
