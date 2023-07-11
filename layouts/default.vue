<template>
  <div :class="{ dark: darkMode }">
    <div
      class="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-600 dark:text-gray-50"
    >
      <vLayoutHeader />

      <vContainer class="flex">
        <vNavigationSidebarMenu />

        <main class="flex p-4 grow">
          <article>
            <ContentDoc v-slot="{ doc }">
              <h1
                class="text-4xl font-light pt-4 pb-8 border-b border-gray-100 dark:border-gray-800"
              >
                {{ doc.title }}
              </h1>
              <ContentRenderer :value="doc" />
            </ContentDoc>

            <div class="flex items-between mt-4">
              <NuxtLink
                v-if="prev"
                class="text-gray-500 dark:text-gray-300 hover:text-primary-500 transition"
                :to="prev._path"
                >&larr; {{ prev.title }}</NuxtLink
              >
              <span class="grow"></span>
              <NuxtLink
                v-if="next"
                class="text-gray-500 dark:text-gray-300 hover:text-primary-500 transition"
                :to="next._path"
                >{{ next.title }} &rarr;</NuxtLink
              >
            </div>
          </article>

          <vNavigationContentMenu />
        </main>
      </vContainer>
    </div>
  </div>
</template>

<script setup lang="ts">
const { prev, next } = useContent();

const { darkMode } = useDarkMode();
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
    @apply font-bold;
  }

  h1 {
    @apply text-2xl mb-4;
  }

  h2 {
    @apply text-xl mt-6 mb-1;
  }

  h3 {
    @apply text-lg mt-6 mb-1;
  }

  pre {
    @apply my-2 p-4 bg-neutral-200 dark:bg-gray-800 rounded;
  }

  p {
    @apply mb-4 leading-6;
  }
}
</style>
