import { ref, watchEffect } from "vue"

const isDark = ref(
  localStorage.getItem("theme") === "dark" ||
  (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches)
)

watchEffect(() => {
  const root = document.documentElement
  if (isDark.value) {
    root.classList.add("dark")
    localStorage.setItem("theme", "dark")
  } else {
    root.classList.remove("dark")
    localStorage.setItem("theme", "light")
  }
})

export function useDarkMode() {
  return {
    isDark,
    toggle: () => (isDark.value = !isDark.value),
  }
}
