<script setup lang="ts">
import UserForm from '@/components/users/UserForm.vue';
import UserTable from '@/components/users/UserTable.vue';

</script>

<template>
  <div>
    <h2 class="text-2xl font-bold mb-4">User Management</h2>
    <UserTable />
     <UserForm />
  </div>
</template>