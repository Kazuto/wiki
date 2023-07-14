<template>
  <button
    class="p-1 px-3 rounded text-gray-500 dark:text-gray-300 text-lg"
    @click="setTheme(colorMode.preference)"
  >
    <Icon :name="icon" />
  </button>
</template>

<script setup lang="ts">
const colorMode = useColorMode();

const icon = ref('');

setIcon(colorMode.preference);

const setTheme = (theme: string) => {
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

function setIcon(theme: string) {
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

watch(colorMode, (value: string) => {
  setIcon(value.preference);
});
</script>

<style scoped></style>
