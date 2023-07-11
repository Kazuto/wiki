<template>
  <ul class="mb-2">
    <li
      v-for="(item, index) in node"
      :key="index"
    >
      <VNavigationNodeItem :item="item" />

      <vNavigationNodeTree
        v-if="item.children"
        :node="item.children"
        :level="level + 1"
      />
    </li>
  </ul>
</template>

<script setup lang="ts">
import { NavItem, TocLink } from '@nuxt/content/dist/runtime/types';

defineProps({
  node: {
    type: Array as PropType<NavItem[] | TocLink[]>,
    default: () => [],
  },
  level: {
    type: Number,
    default: 1,
  },
});
</script>

<style lang="postcss" scoped></style>
