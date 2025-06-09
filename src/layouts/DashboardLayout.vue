<!-- src/layouts/DashboardLayout.vue -->
<script setup lang="ts">
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import AppSidebar from "@/components/AppSidebar.vue"
</script>

<template>
  <SidebarProvider>
    <div class="flex min-h-screen">
      <AppSidebar />

      <main class="flex-1 p-6">
        <SidebarTrigger />
        <RouterView />
      </main>
    </div>
  </SidebarProvider>
</template>
