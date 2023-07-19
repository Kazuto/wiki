<template>
  <nav
    class="fixed inset-0 z-40 w-full border-r border-gray-100 bg-gray-50 p-8 text-gray-600 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-100 lg:hidden"
  >
    <div class="flex justify-between">
      <vLogo />
      <button
        class="flex h-10 w-10 items-center justify-center rounded text-2xl transition hover:bg-gray-100 dark:hover:bg-gray-800"
        aria-label="Close menu"
        @click="() => $emit('toggleMenu')"
      >
        <Icon name="heroicons:x-mark" />
      </button>
    </div>
    <div class="mb-4">
      <vSearch />
    </div>
    <vNavigationNodeTree
      :node="navigation"
      :level="1"
    />
  </nav>
</template>

<script setup lang="ts">
import { NavItem } from '@nuxt/content/dist/runtime/types';

const { navigation }: { navigation: Ref<Array<NavItem>> } = useContent();

defineEmits(['toggleMenu']);
</script>

<style scoped></style>
