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
import { CreditCard, DollarSign } from "lucide-vue-next"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from "@/components/ui/collapsible"

const route = useRoute()
const router = useRouter()


const isFinanceOpen = ref(true)

const financeItems = [
  { title: "Payments", url: "/payments", icon: CreditCard },
  { title: "Reports", url: "/financial-reports", icon: DollarSign }
]
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
        <SidebarGroupLabel>Management</SidebarGroupLabel>
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


      <SidebarGroup>
        <SidebarGroupLabel>Events</SidebarGroupLabel>
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


      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <User2 /> Username
                  <ChevronUp class="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="top"
                class="w-[--reka-popper-anchor-width]"
              >
                <DropdownMenuItem>
                  <span>Account</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Billing</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Sign out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>

  </Sidebar>
</template>