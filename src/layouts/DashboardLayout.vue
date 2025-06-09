<template>
  <div class="flex h-screen bg-background text-foreground">
    <!-- Desktop Sidebar -->
    <Sidebar class="hidden md:block" />

    <!-- Mobile Sidebar using shadcn-vue Dialog -->
    <Dialog v-model:open="sidebarOpen">
      <DialogContent class="p-0 max-w-xs w-full md:hidden">
        <Sidebar />
      </DialogContent>
    </Dialog>

    <!-- Main Content -->
    <div class="flex flex-col flex-1 overflow-hidden">
      <Topbar @toggleSidebar="sidebarOpen = true" />
      <main class="p-4 overflow-y-auto flex-1">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Sidebar from '@/components/Sidebar.vue'
import Topbar from '@/components/Topbar.vue'

const sidebarOpen = ref(false)
</script>
