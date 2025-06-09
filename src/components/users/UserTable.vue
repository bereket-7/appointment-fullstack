<script setup lang="ts">
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { Pencil, Trash2 } from 'lucide-vue-next'
import { ref } from 'vue'

const users = ref([
  {
    id: 1,
    firstName: 'Alice',
    lastName: 'Johnson',
    email: 'alice@example.com',
  },
  {
    id: 2,
    firstName: 'Bob',
    lastName: 'Smith',
    email: 'bob@example.com',
  },
  {
    id: 3,
    firstName: 'Charlie',
    lastName: 'Brown',
    email: 'charlie@example.com',
  },
])

const editUser = (id: number) => {
  console.log('Edit user', id)
  // Open modal or navigate to edit page
}

const deleteUser = (id: number) => {
  users.value = users.value.filter(user => user.id !== id)
}
</script>

<template>
  <Table>
    <TableCaption>List of registered users.</TableCaption>
    <TableHeader>
      <TableRow>
        <TableHead>First Name</TableHead>
        <TableHead>Last Name</TableHead>
        <TableHead>Email</TableHead>
        <TableHead class="text-right">Actions</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow v-for="user in users" :key="user.id">
        <TableCell class="font-medium">{{ user.firstName }}</TableCell>
        <TableCell>{{ user.lastName }}</TableCell>
        <TableCell>{{ user.email }}</TableCell>
        <TableCell class="text-right space-x-2">
          <Button variant="ghost" size="icon" @click="editUser(user.id)">
            <Pencil class="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="icon" @click="deleteUser(user.id)">
            <Trash2 class="w-4 h-4 text-destructive" />
          </Button>
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
</template>
