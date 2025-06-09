<!-- src/components/layout/AppSidebar.vue -->
<script setup lang="ts">
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
} from "@/components/ui/sidebar"

import { ref } from 'vue'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu'
import { useRoute, useRouter } from 'vue-router'
import { Home, Inbox, User, Calendar, Search, Settings, LogOut } from "lucide-vue-next"

const route = useRoute()
const router = useRouter()

const companies = [
  { id: '1', name: 'Acme Corp' },
  { id: '2', name: 'Globex Inc' },
  { id: '3', name: 'Initech LLC' },
]
const selectedCompanyId = ref(companies[0].id)

function handleCompanyChange(value: string) {
  selectedCompanyId.value = value
  // You can emit, store, or fetch company-specific data here.
}
function handleLogout() {
  // Add real logout logic here (e.g., clear auth and redirect)
  router.push('/login')
}

const items = [
  { title: "Home", url: "/", icon: Home },
  { title: "Appointments", url: "/appointments", icon: Inbox },
  { title: "Users", url: "/users", icon: User },
  { title: "Calendar", url: "/calendar", icon: Calendar },
  { title: "Events", url: "/events", icon: Search },
  { title: "Settings", url: "/settings", icon: Settings },
]
</script>

<template>
  <Sidebar class="h-screen border-r">

        <!-- Sidebar Header with Company Switcher -->
    <div class="p-4 border-b">
      <label class="block text-xs text-muted-foreground mb-1">Company</label>
      <Select :model-value="selectedCompanyId" @update:model-value="handleCompanyChange">
        <SelectTrigger class="w-full">
          <SelectValue :placeholder="'Select company'" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem
            v-for="company in companies"
            :key="company.id"
            :value="company.id"
          >
            {{ company.name }}
          </SelectItem>
        </SelectContent>
      </Select>
    </div>

    <!-- Sidebar Content -->
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupLabel>Appointment Management</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem v-for="item in items" :key="item.title">
              <SidebarMenuButton asChild>
                <RouterLink
                  :to="item.url"
                  class="flex items-center gap-2 px-3 py-2 rounded-md transition-colors"
                  :class="route.path === item.url ? 'bg-muted text-primary' : 'hover:bg-muted'"
                >
                  <component :is="item.icon" class="w-5 h-5" />
                  <span class="text-sm">{{ item.title }}</span>
                </RouterLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>


       <!-- Footer -->
    <SidebarFooter class="px-4 py-3 border-t">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button class="flex w-full items-center justify-between rounded-md px-2 py-2 hover:bg-muted">
            <div class="flex items-center gap-2">
              <UserIcon class="w-5 h-5" />
              <span class="text-sm font-medium">Admin</span>
            </div>
            <ChevronDownIcon class="w-4 h-4" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          <DropdownMenuItem @click="handleLogout">
            <LogOut class="w-4 h-4 mr-2 text-destructive" /> Logout
          </DropdownMenuItem>
          <DropdownMenuItem @click="handleLogout">
            <span class="font-medium text-foreground">Account</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <div class="flex flex-col gap-0.5">
            <span class="font-medium text-foreground">Admin</span>
            <span class="text-xs">v1.0.0 • Stable</span>
            <span class="text-xs text-muted-foreground">© 2025 Appointment Management</span>
          </div>
          </DropdownMenuItem>
          
        </DropdownMenuContent>
      </DropdownMenu>
    </SidebarFooter>
  </Sidebar>
</template>