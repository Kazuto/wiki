<template>
  <header
    class="sticky top-0 h-14 border-b border-gray-100 bg-gray-50 px-8 text-gray-600 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-100 lg:static xl:px-16"
  >
    <vContainer class="flex items-center justify-between">
      <button
        class="block flex h-10 w-10 items-center justify-center rounded text-2xl transition hover:bg-gray-100 dark:hover:bg-gray-800 lg:hidden"
        aria-label="Open menu"
        @click="() => $emit('toggleMenu')"
      >
        <Icon name="heroicons:bars-3" />
      </button>
      <span></span>
      <vThemeSwitch />
    </vContainer>
  </header>
</template>

<script setup lang="ts">
defineEmits(['toggleMenu']);
</script>
