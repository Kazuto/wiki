<template>
  <nav class="sticky top-2 z-10 hidden lg:block w-full h-fit max-w-xs p-4">
    <span class="block font-light uppercase text-xs mb-2">On This Page</span>

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
<style scoped></style>
