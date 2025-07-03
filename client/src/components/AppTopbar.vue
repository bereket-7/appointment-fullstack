<script setup lang="ts">
import { useDarkMode } from "@/composables/useTheme"
import { Bell, User, Sun, Moon } from "lucide-vue-next"
import { SidebarTrigger } from "./ui/sidebar";

const { isDark, toggle } = useDarkMode()
</script>

<template>
  <header class="sticky top-0 z-50 w-full h-14 px-6 flex items-center justify-between border-b bg-background">    <!-- Left: Title -->
    <SidebarTrigger />
    <h1 class="text-xl font-semibold text-primary whitespace-nowrap">
      Appointment Management
    </h1>

    <!-- Right: Icons -->
    <div class="flex items-center gap-2">
      <button @click="toggle" class="p-2 hover:bg-muted rounded-lg">
        <component :is="isDark ? Sun : Moon" class="w-5 h-5" />
      </button>
      <button class="p-2 hover:bg-muted rounded-lg">
        <Bell class="w-5 h-5" />
      </button>
      <button class="p-2 hover:bg-muted rounded-lg">
        <User class="w-5 h-5" />
      </button>
    </div>
  </header>
</template>
