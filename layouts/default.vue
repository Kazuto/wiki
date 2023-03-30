<template>
  <div
    id="app"
    class="relative text-neutral-200"
  >
    <vLayoutHeader />

    <main class="my-8">
      <vContainer>
        <slot />
      </vContainer>
    </main>

    <vLayoutFooter />
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
    'footer';
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
