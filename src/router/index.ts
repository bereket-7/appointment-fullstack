import { createRouter, createWebHistory } from 'vue-router'
import UserPage from '@/views/UserPage.vue'
import SettingPage from '@/views/SettingPage.vue'
import DashboardHome from '@/views/DashboardHome.vue'
import DashboardLayout from '@/layouts/DashboardLayout.vue'
import EventsPage from '@/views/EventsPage.vue'
import CalendarPage from '@/views/CalendarPage.vue'
import AppointmentPage from '@/views/AppointmentPage.vue'


const routes = [
  {
    path: '/',
    component: DashboardLayout,
    children: [
      { path: '', name: 'Home', component: DashboardHome },
      { path: 'appointments', name: 'Appointments', component: AppointmentPage },
      { path: 'users', name: 'Users', component: UserPage },
      { path: 'calendar', name: 'Calendar', component: CalendarPage },
      { path: 'events', name: 'Events', component: EventsPage },
      { path: 'settings', name: 'Settings', component: SettingPage },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
