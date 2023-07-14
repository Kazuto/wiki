<template>
  <div
    class="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-600 dark:text-gray-100"
  >
    <div class="grid grid-cols-[auto_1fr]">
      <vNavigationSidebarMenu />
      <div>
        <vLayoutHeader />
        <main class="my-8 mx-16">
          <vContainer class="flex">
            <article class="p-6">
              <ContentDoc v-slot="{ doc }">
                <span class="block mb-2 text-primary font-bold capitalize">{{
                  doc._dir
                }}</span>
                <h1 class="text-5xl font-bold mb-4">
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
          </vContainer>
        </main>
        <vLayoutFooter />
      </div>
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

  h2 a:before,
  h3 a:before {
    content: '# ';
    @apply text-primary;
  }
}

pre * {
  font-family: monospace !important;
}

pre .line {
  position: relative;
  padding-left: 3em;
}

.line::before {
  position: absolute;
  pointer-events: none;
  font-size: 100%;
  top: 0;
  left: -0.5em;
  width: 3em; /* works for line-numbers below 1000 lines */
}

.line::before {
  content: attr(line);
  color: #999;
  padding-right: 0.8em;
  text-align: right;
}
</style>
