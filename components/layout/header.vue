<template>
  <header class="h-14 border-b border-gray-100 dark:border-gray-800">
    <vContainer class="flex items-center justify-between p-4">
      <span></span>
      <button
        class="p-1 px-3 rounded text-gray-500 dark:text-gray-300 text-lg"
        @click="setTheme(darkMode ? 'light' : 'dark')"
      >
        <Icon
          :name="darkMode ? 'heroicons-outline:sun' : 'heroicons-outline:moon'"
        />
      </button>
    </vContainer>
  </header>
</template>

<script setup lang="ts">
const { darkMode, setTheme, LOCAL_STORAGE_THEME_KEY } = useDarkMode()

onMounted(() => {
  const isDarkModePreferred = window.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches

  const theme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY)

  if (theme) {
    setTheme(theme)
  } else {
    setTheme(isDarkModePreferred ? 'dark' : 'light')
  }
})

watch(darkMode, (selected) => {
  setTheme(selected ? 'dark' : 'light')
})
</script>
