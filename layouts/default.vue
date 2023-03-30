<template>
  <div :class="{ dark: darkMode }">
    <div
      class="flex flex-col min-h-screen bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-200"
    >
      <vLayoutHeader @toggled-theme="() => (darkMode = !darkMode)" />

      <div class="my-8 grow">
        <vContainer class="flex flex-nowrap gap-4">
          <vSidebarMenu />

          <main class="p-4 grow">
            <ContentDoc />
          </main>

          <vSidebarContent />
        </vContainer>
      </div>

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
  @apply bg-neutral-300 dark:bg-neutral-700;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

::-webkit-scrollbar-thumb {
  @apply bg-neutral-100 dark:bg-neutral-500;
}

h1 {
  @apply mb-2;
}
</style>
