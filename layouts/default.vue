<template>
  <div :class="{ dark: darkMode }">
    <div
      class="flex flex-col h-screen bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-200"
    >
      <vLayoutHeader @toggled-theme="() => (darkMode = !darkMode)" />

      <main class="my-8 grow">
        <vContainer>
          <slot />
        </vContainer>
      </main>

      <vLayoutFooter />
    </div>
  </div>
</template>

<script setup lang="ts">
const darkMode = ref(false);
</script>

<style lang="postcss">
html,
body {
  @apply antialiased;
}

::-webkit-scrollbar {
  @apply w-2;
}

::-webkit-scrollbar-track {
  @apply bg-black bg-opacity-30 rounded;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

::-webkit-scrollbar-thumb {
  @apply bg-white bg-opacity-20 rounded;
}
</style>
