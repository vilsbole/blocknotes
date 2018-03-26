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
      path: '/notes',
      name: 'home',
      component: Home,
      meta: { requiresAuth: true },
      children: [
        // {
        //   path: '/notes',
        //   component: '<div>hello</div>',
        //   meta: { requiresAuth: true },
        // },
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
      redirect: '/notes'
    }
  ]
})

router.beforeResolve(async (to, from, next) => {
  if (!to.meta.requiresAuth) { next() }

  if (Auth.isSignedIn()) {
    const user = Auth.fetchProfile()
    Auth.updateProfile(user)
    next()
  } else if (Auth.isSignInPending()) {
    const user = await Auth.handlePending()
    Auth.updateProfile(user)
    next()
  } else {
    next('/auth')
  }
})

export default router
