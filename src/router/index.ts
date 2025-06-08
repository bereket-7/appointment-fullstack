import { createRouter, createWebHistory } from 'vue-router'
import DashboardHome from '@/views/DashboardHome.vue'

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: DashboardHome,
  },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
