<template>
  <nav
    class="hidden lg:block w-full max-w-xs rounded p-6 bg-neutral-50 dark:bg-gray-800"
  >
    <vNavigationNodeTree
      :node="navigation"
      :level="1"
    />
  </nav>
</template>

<script setup lang="ts">
import { NavItem } from '@nuxt/content/dist/runtime/types';

const { navigation }: { navigation: Ref<Array<NavItem>> } = useContent();

navigation.value.sort(function (a: NavItem, b: NavItem) {
  if (!a.order) {
    a.order = a.title.toLowerCase().charCodeAt(0) - 96;
  }

  if (!b.order) {
    b.order = b.title.toLowerCase().charCodeAt(0) - 96;
  }

  return a.order - b.order;
});
</script>

<style scoped></style>
