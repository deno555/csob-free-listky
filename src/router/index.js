import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home/Home.vue')
  },
  {
    path: '/password',
    name: 'Password',
    component: () => import('../views/Password/Password.vue')
  },
  {
    path: '/main',
    name: 'Main',
    component: () => import('../views/Main/Main.vue')
  },
  {
    path: '/shop',
    name: 'Shop',
    component: () => import('../views/Shop/Shop.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
