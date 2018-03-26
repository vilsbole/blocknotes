import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/Home.vue'
import Register from '../components/Register.vue'
import NotesEdit from '../components/Notes.edit'
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
          path: '/notes/:noteId',
          component: NotesEdit,
          meta: { requiresAuth: true },
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
