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
} from "@/components/ui/sidebar"

import { useRoute } from 'vue-router'
import { Home, Inbox, User, Calendar, Search, Settings } from "lucide-vue-next"

const route = useRoute()

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
  </Sidebar>
</template>