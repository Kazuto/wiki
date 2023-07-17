<template>
  <nav
    class="hidden lg:block w-80 p-8 border-r border-gray-100 dark:border-gray-800"
  >
    <vLogo />
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
</script>

<style scoped></style>
