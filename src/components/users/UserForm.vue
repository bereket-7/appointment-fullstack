<!-- src/components/UserForm.vue -->
<script setup lang="ts">
import { ref } from 'vue'
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter
} from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

const name = ref('')
const email = ref('')
const password = ref('')
const role = ref('admin')

function registerUser() {
  const userData = {
    name: name.value,
    email: email.value,
    password: password.value,
    role: role.value,
  }
  console.log('Registering user:', userData)
  // Call backend API here
}
</script>

<template>
  <Card class="max-w-md mx-auto mt-10 shadow-lg">
    <CardHeader>
      <CardTitle>Add New User</CardTitle>
    </CardHeader>

    <CardContent class="space-y-4">
      <div>
        <Label for="name">Name</Label>
        <Input id="name" v-model="name" placeholder="Enter full name" />
      </div>

      <div>
        <Label for="email">Email</Label>
        <Input id="email" v-model="email" type="email" placeholder="admin@example.com" />
      </div>

      <div>
        <Label for="role">Role</Label>
        <Select v-model="role">
          <SelectTrigger id="role">
            <SelectValue placeholder="Select role" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="admin">Admin</SelectItem>
            <SelectItem value="staff">Staff</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label for="password">Password</Label>
        <Input id="password" v-model="password" type="password" placeholder="********" />
      </div>
    </CardContent>

    <CardFooter>
      <Button class="w-full" @click="registerUser">Register</Button>
    </CardFooter>
  </Card>
</template>
