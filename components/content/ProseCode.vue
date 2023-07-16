<template>
  <div>
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps({
  code: {
    type: String,
    default: '',
  },
  language: {
    type: String,
    default: null,
  },
  filename: {
    type: String,
    default: null,
  },
  highlights: {
    type: Array,
    default: () => [],
  },
  meta: {
    type: String,
    default: null,
  },
});
</script>

<style lang="postcss">
div[class*='language-'] {
  @apply font-mono text-sm;

  pre {
    @apply my-2 py-4 px-1 bg-neutral-200 dark:bg-gray-800 rounded;

    code .line {
      @apply block min-h-[1rem] relative pl-12;

      &.highlight {
        @apply bg-black dark:bg-white bg-opacity-10 dark:bg-opacity-10;
      }

      &::before {
        @apply absolute top-0 -left-2 w-12 pr-3 content-[attr(line)]
        pointer-events-none text-right text-gray-500 dark:text-gray-300;
      }
    }
  }
}
</style>
