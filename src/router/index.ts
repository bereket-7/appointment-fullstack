import { createRouter, createWebHistory } from 'vue-router'
import DashboardHome from '@/views/DashboardHome.vue'

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: DashboardHome,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
