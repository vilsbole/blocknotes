import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/Home.vue'
import Register from '../components/Register.vue'
import NotesEdit from '../components/Notes.edit'
import NotesShow from '../components/Notes.show'
import Auth from '@/services/auth.service'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: '/notes/create',
          component: NotesEdit,
          meta: { requiresAuth: true },
        },
        {
          path: '/notes/:notesId',
          component: NotesShow,
          meta: { requiresAuth: true },
          props: true

        },
        {
          path: '/notes/:notesId/edit',
          meta: { requiresAuth: true },
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
      const user = Auth.fetchProfile()
      Auth.updateProfile(user)
      next()
    } else if (Auth.isSignInPending()) {
      Auth.handlePending()
        .then((userData) => {
          console.log('handle pending', userData)
          Auth.updateProfile(userData)
        })
        .then(next)
    } else {
      next('/auth')
    }
  } else {
    next()
  }
})

export default router
