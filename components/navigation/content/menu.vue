<template>
  <nav
    class="sticky top-8 z-10 hidden lg:block w-full h-fit max-w-xs p-4 border-l-2 border-neutral-300 dark:border-neutral-600"
  >
    <span class="block font-bold mb-2">Table of Contents</span>

    <VNavigationNodeTree
      v-if="toc && toc.links"
      :node="toc.links"
      :level="0"
    />
  </nav>
</template>

<script setup lang="ts">
import { Toc } from '@nuxt/content/dist/runtime/types';

const { toc }: { toc: Toc } = useContent();
</script>

<style scoped></style>
