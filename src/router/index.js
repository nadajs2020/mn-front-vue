import { createRouter, createWebHistory } from '@ionic/vue-router';


const routes = [
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/HomeUser.vue')
  },
  {
    path: '/AddUser',
    name: 'AddUser',
    component: () => import('../views/AddUser.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
