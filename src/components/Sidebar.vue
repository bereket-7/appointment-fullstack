<!-- components/Sidebar.vue -->
<template>
  <aside class="w-64 bg-white shadow-md p-4">
    <nav class="space-y-2">
      <RouterLink to="/" class="block p-2 rounded hover:bg-gray-100">Dashboard</RouterLink>
      <RouterLink to="/users" class="block p-2 rounded hover:bg-gray-100">Users</RouterLink>
      <RouterLink to="/settings" class="block p-2 rounded hover:bg-gray-100">Settings</RouterLink>
    </nav>
  </aside>
</template>
