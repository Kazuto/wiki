<template>
  <button
    class="rounded p-1 px-3 text-lg text-gray-500 dark:text-gray-300"
    @click="setTheme(colorMode.preference)"
  >
    <Icon :name="icon" />
  </button>
</template>

<script setup lang="ts">
import { ColorModeInstance } from '@nuxtjs/color-mode/dist/runtime/types';
const colorMode = useColorMode();

const icon = ref('heroicons:ellipsis-horizontal');

onMounted(() => {
  setIcon(colorMode.preference);
});

const setTheme = (theme: ColorModeInstance['preference']) => {
  switch (theme) {
    case 'system':
      colorMode.preference = 'light';
      break;
    case 'light':
      colorMode.preference = 'dark';
      break;
    case 'dark':
      colorMode.preference = 'system';
      break;
  }
};

function setIcon(theme: ColorModeInstance['preference']) {
  switch (theme) {
    case 'system':
      icon.value = 'heroicons-outline:computer-desktop';
      break;
    case 'light':
      icon.value = 'heroicons-outline:sun';
      break;
    case 'dark':
      icon.value = 'heroicons-outline:moon';
      break;
  }
}

watch(colorMode, (value: ColorModeInstance) => {
  setIcon(value.preference);
});
</script>

<style scoped></style>
