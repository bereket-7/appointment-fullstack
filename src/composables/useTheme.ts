import { onMounted, ref } from 'vue'

const theme = ref<'light' | 'dark'>('light')

export function useTheme() {
  const toggleTheme = () => {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
    document.documentElement.classList.toggle('dark', theme.value === 'dark')
    localStorage.setItem('theme', theme.value)
  }

  onMounted(() => {
    const saved = localStorage.getItem('theme')
    theme.value = saved === 'dark' ? 'dark' : 'light'
    document.documentElement.classList.toggle('dark', theme.value === 'dark')
  })

  return { theme, toggleTheme }
}
