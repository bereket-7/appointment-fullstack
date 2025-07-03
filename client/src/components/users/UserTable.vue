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
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

import { Pencil, Trash2 } from 'lucide-vue-next'
import { ref } from 'vue'

const users = ref([
  { id: 1, firstName: 'Alice', lastName: 'Johnson', email: 'alice@example.com' },
  { id: 2, firstName: 'Bob', lastName: 'Smith', email: 'bob@example.com' },
  { id: 3, firstName: 'Charlie', lastName: 'Brown', email: 'charlie@example.com' }
])

const selectedUser = ref(null)
const isEditDialogOpen = ref(false)
const isDeleteDialogOpen = ref(false)

const openEditDialog = (user) => {
  selectedUser.value = { ...user }
  isEditDialogOpen.value = true
}

const saveUser = () => {
  const index = users.value.findIndex(u => u.id === selectedUser.value.id)
  if (index !== -1) {
    users.value[index] = { ...selectedUser.value }
  }
  isEditDialogOpen.value = false
}

const openDeleteDialog = (user) => {
  selectedUser.value = user
  isDeleteDialogOpen.value = true
}

const confirmDelete = () => {
  users.value = users.value.filter(u => u.id !== selectedUser.value.id)
  isDeleteDialogOpen.value = false
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
          <Button variant="ghost" size="icon" @click="openEditDialog(user)">
            <Pencil class="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="icon" @click="openDeleteDialog(user)">
            <Trash2 class="w-4 h-4 text-destructive" />
          </Button>
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>

  <!-- Edit Dialog -->
  <Dialog v-model:open="isEditDialogOpen">
    <DialogContent class="sm:max-w-md">
      <DialogHeader>
        <DialogTitle>Edit User</DialogTitle>
      </DialogHeader>
      <div class="space-y-4 py-2">
        <div>
          <Label for="firstName">First Name</Label>
          <Input id="firstName" v-model="selectedUser.firstName" />
        </div>
        <div>
          <Label for="lastName">Last Name</Label>
          <Input id="lastName" v-model="selectedUser.lastName" />
        </div>
        <div>
          <Label for="email">Email</Label>
          <Input id="email" v-model="selectedUser.email" />
        </div>
      </div>
      <DialogFooter>
        <Button variant="outline" @click="isEditDialogOpen = false">Cancel</Button>
        <Button @click="saveUser">Save</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>

  <!-- Delete Confirmation Dialog -->
  <Dialog v-model:open="isDeleteDialogOpen">
    <DialogContent class="sm:max-w-sm text-center">
      <DialogHeader>
        <DialogTitle>Confirm Deletion</DialogTitle>
      </DialogHeader>
      <p class="py-4">Are you sure you want to delete <strong>{{ selectedUser?.firstName }}</strong>?</p>
      <DialogFooter class="justify-center space-x-2">
        <Button variant="outline" @click="isDeleteDialogOpen = false">Cancel</Button>
        <Button variant="destructive" @click="confirmDelete">Delete</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>
