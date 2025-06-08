<template>
  <div class="flex h-screen bg-gray-100">
    <Sidebar />
    <div class="flex flex-col flex-1 overflow-hidden">
      <Topbar />
      <main class="p-4 overflow-y-auto flex-1">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup>
import Sidebar from '@/components/Sidebar.vue'
import Topbar from '@/components/Topbar.vue'
</script>
