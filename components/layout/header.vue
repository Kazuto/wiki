<template>
  <header class="h-14 bg-neutral-50 dark:bg-neutral-600 p-2">
    <vContainer class="flex items-center justify-between">
      Some content
      <span></span>
      <button
        class="bg-blue-400 p-1 px-3 rounded text-white"
        @click="() => $emit('toggled-theme')"
      >
        Toggle Theme
      </button>
    </vContainer>
  </header>
</template>

<script setup lang="ts">
defineEmits(['toggled-theme']);
</script>

<style scoped></style>
