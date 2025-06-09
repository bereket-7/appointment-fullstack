<template>
  <aside class="w-64 bg-card shadow-lg h-full p-4 space-y-4">
    <nav class="space-y-2">
      <router-link
        v-for="link in links"
        :key="link.to"
        :to="link.to"
        class="block px-4 py-2 rounded-md text-sm font-medium hover:bg-accent hover:text-accent-foreground"
        active-class="bg-primary text-primary-foreground"
      >
        {{ link.label }}
      </router-link>
    </nav>
  </aside>
</template>

<script setup lang="ts">
const links = [
  { to: '/', label: 'Dashboard' },
  { to: '/users', label: 'Users' },
  { to: '/settings', label: 'Settings' },
]
</script>
