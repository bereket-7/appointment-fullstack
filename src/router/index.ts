import { createRouter, createWebHistory } from 'vue-router'
import UserPage from '@/views/UserPage.vue'
import SettingPage from '@/views/SettingPage.vue'
import DashboardHome from '@/views/DashboardHome.vue'

const routes = [
  {
    path: '/',
    component: DashboardHome,
     children: [
      { path: 'users', name: 'Users', component: UserPage },
      { path: 'settings', name: 'Settings', component: SettingPage }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
