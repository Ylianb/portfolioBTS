import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/bts-sio',
      name: 'bts-sio',
      component: () => import('../views/BtsSio.vue')
    },
    {
      path: '/veille-technologique',
      name: 'veille',
      component: () => import('../views/VeilleTechnologique.vue')
    },
    {
      path: '/realisations',
      name: 'realisations',
      component: () => import('../views/Realisations.vue')
    }
  ]
})

export default router