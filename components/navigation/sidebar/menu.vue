<template>
  <nav
    class="hidden lg:block w-80 p-8 border-r border-gray-100 dark:border-gray-800"
  >
    <nuxt-img
      class="h-auto w-32 mb-8"
      :src="darkMode ? '/logo_dark.svg' : '/logo_light.svg'"
      alt="logo"
    />
    <div class="mb-4">
      <input
        type="text"
        placeholder="Search"
        class="w-full bg-gray-100 dark:bg-gray-800 border border-gray-200
        dark:border-gray-700 rounded px-3 py-1 text-sm placeholder:text-gray-500
        dark:placeholder:text-gray-300"
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
const { darkMode } = useDarkMode();

const { navigation }: { navigation: Ref<Array<NavItem>> } = useContent();
</script>

<style scoped></style>
