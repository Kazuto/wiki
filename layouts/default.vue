<template>
  <div :class="{ dark: darkMode }">
    <div
      class="flex flex-col min-h-screen bg-neutral-200 dark:bg-gray-700 text-neutral-700 dark:text-neutral-200"
    >
      <vLayoutHeader @toggled-theme="() => (darkMode = !darkMode)" />

      <div class="my-8 grow">
        <vContainer class="flex flex-nowrap gap-4">
          <vSidebarMenu />

          <main class="p-4 grow">
            <ContentDoc v-slot="{ doc }">
              <h1>{{ doc.title }}</h1>
              <ContentRenderer :value="doc" />
            </ContentDoc>

            <div class="flex items-between mt-4">
              <NuxtLink
                v-if="prev"
                class="text-neutral-500 hover:text-neutral-700"
                :to="prev._path"
                >&larr; {{ prev.title }}</NuxtLink
              >
              <span class="grow"></span>
              <NuxtLink
                v-if="next"
                class="text-neutral-500 hover:text-neutral-700"
                :to="next._path"
                >{{ next.title }} &rarr;</NuxtLink
              >
            </div>
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

const { prev, next } = useContent();
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

main {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    @apply mb-2 font-bold;
  }

  h1 {
    @apply text-2xl;
  }

  h2 {
    @apply text-xl my-2;
  }

  h3 {
    @apply text-lg my-2;
  }

  pre {
    @apply my-2 p-4 text-gray-100 dark:text-gray-50 bg-gray-700 dark:bg-gray-800 rounded;
  }

  p {
    @apply mb-4 leading-6;
  }
}
</style>
