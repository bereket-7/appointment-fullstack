<template>
  <div class="flex h-screen flex-col items-center justify-center text-center px-4">
    <div class="max-w-md">
      <AlertTriangle class="mx-auto h-16 w-16 text-destructive mb-4" />
      <h1 class="text-6xl font-bold tracking-tight text-foreground">404</h1>
      <p class="mt-4 text-xl text-muted-foreground">Oops! Page not found.</p>
      <p class="mt-2 text-sm text-muted-foreground">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <div class="mt-6">
        <Button @click="goHome" size="lg">Go back home</Button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { useRouter } from 'vue-router'

const router = useRouter()

function goHome() {
  router.push('/')
}
</script>
