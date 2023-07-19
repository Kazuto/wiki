<template>
  <nav class="sticky top-2 z-10 hidden h-fit w-full max-w-xs p-4 lg:block">
    <span class="mb-2 block text-xs font-light uppercase">On This Page</span>

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
