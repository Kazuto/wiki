<template>
  <div
    id="app"
    class="relative text-neutral-200"
  >
    <header class="h-14 border-b border-neutral-500 bg-neutral-600 p-2">
      <div
        class="w-full h-full container mx-auto flex items-center justify-between"
      >
        Some content
      </div>
    </header>

    <main class="w-full container my-8 mx-auto overflow-y-auto flex-grow">
      <slot />
    </main>

    <footer class="h-14 border-b border-neutral-500 bg-neutral-600 p-2 text-sm">
      <div
        class="w-full h-full container mx-auto flex items-center justify-between"
      >
        Some content
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="postcss">
html,
body {
  @apply bg-neutral-700 antialiased;
}

#app {
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    'header'
    'main'
    'navigation';
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
