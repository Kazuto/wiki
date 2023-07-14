<template>
  <nav
    class="hidden lg:block w-80 p-8 border-r border-gray-100 dark:border-gray-800"
  >
    <vLogo />
    <div class="mb-4">
      <input
        type="text"
        placeholder="Search"
        class="w-full bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded px-3 py-1 text-sm placeholder:text-gray-500 dark:placeholder:text-gray-300"
      />
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
</script>

<style scoped></style>
