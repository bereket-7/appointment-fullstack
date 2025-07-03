<!-- src/components/layout/DashboardLayout.vue -->
<script setup lang="ts">
import AppSidebar from "@/components/AppSidebar.vue";
import AppTopbar from "@/components/AppTopbar.vue";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"

</script>

<template>
  <SidebarProvider>
    <div class="flex min-h-screen">
      <AppSidebar />
      <div class="flex-1 flex flex-col w-full">
        <AppTopbar />
        <!-- <SidebarTrigger /> -->
        <main class="flex-1 p-2 overflow-y-auto">
          <RouterView />
        </main>
      </div>
    </div>
  </SidebarProvider>
</template>

