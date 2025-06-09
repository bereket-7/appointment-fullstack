<script setup lang="ts">
import { useTheme } from '@/composables/useTheme'

const { theme, toggleTheme } = useTheme()
</script>

<template>
  <header class="flex items-center justify-between bg-card px-6 py-3 shadow border-b">
    <div class="flex items-center space-x-4">
      <button @click="$emit('toggleSidebar')" class="md:hidden">
        <!-- Hamburger Icon -->
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      <h1 class="text-xl font-semibold">Admin Dashboard</h1>
    </div>
    <div class="flex items-center space-x-4">
      <button class="relative">🔔
        <span class="absolute -top-1 -right-1 bg-destructive text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">3</span>
      </button>

      <!-- Theme Toggle Button -->
      <button @click="toggleTheme" class="w-8 h-8 flex items-center justify-center rounded-full hover:bg-muted">
        <span v-if="theme === 'dark'">🌙</span>
        <span v-else>☀️</span>
      </button>

      <div class="w-8 h-8 bg-muted rounded-full" />
    </div>
  </header>
</template>
