import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { checkToken } from "../utils/auth";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        guest: true
      }
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../components/Register.vue'),
      meta: {
        guest: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../components/Login.vue'),
      meta: {
        guest: true
      }
    },
    {
      path: '/user/:id',
      name: 'user',
      component: () => import('../views/User.vue'),
      props: true,
      children: [{
        path: 'info',
        name: 'userinfo',
        component: () => import('../views/UserInfo.vue'),
        props: true,
      }, {
        path: 'extra',
        component: () => import('../views/UserExtra.vue')
      }],
      meta: { requiresAuth: true },

    },
    {
      path: '/code',
      name: 'code',
      component: () => import('../components/Code.vue'),
      meta: {
        requiresAuth: true
      }
    },
  ]
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem('token') == null) {
      next({
        path: '/login',
        params: { nextUrl: to.fullPath }
      })
    } else {
      const token = localStorage.getItem('token')
      checkToken(token)
          .then(() => {
        alert('good')
        next()
      })
          .catch(() => {
            next({ name: 'login' })
          })
    }
  }
  else {
    next()
  }
})

export default router
