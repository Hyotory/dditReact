import { createRouter, createWebHistory } from 'vue-router'
import RouteHome from './components/RouteHome.vue'
import RouteAbout from './components/RouteAbout.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: RouteHome
  },
  {
    path: '/about',
    name: 'about',
    component: RouteAbout
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router