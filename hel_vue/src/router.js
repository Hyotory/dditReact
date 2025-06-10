// router.js
import { createRouter, createWebHistory } from 'vue-router'
import RouteHome from './components/RouteHome.vue'
import RouteAbout from './components/RouteAbout.vue'
import EmpList from './components/EmpList.vue'
import EmpDetail from './components/EmpDetail.vue'
import EmpMod from './components/EmpMod.vue'
import EmpAdd from './components/EmpAdd.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: RouteHome
  },
  {
    path: '/about',
    name: 'About',
    component: RouteAbout
  },
  {
    path: '/emp_list',
    name: 'EmpList',
    component: EmpList
  },
  {
    path: '/emp_detail',
    name: 'EmpDetail',
    component: EmpDetail
  },
  {
    path: '/emp_mod',
    name: 'EmpMod',
    component: EmpMod
  },
  {
    path: '/emp_add',
    name: 'EmpAdd',
    component: EmpAdd
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router