<template>
  <template v-if="isNavItem(item)">
    <h4
      v-if="item.children"
      class="uppercase mt-2"
    >
      <Icon
        v-if="item.icon"
        :name="item.icon"
        class="mr-1"
      />
      {{ item.title }}
    </h4>

    <NuxtLink
      v-else
      :to="item._path"
      class="block my-1 text-sm transition-colors hover:text-primary-500 dark:hover:text-primary-200"
    >
      {{ item.title }}
    </NuxtLink>
  </template>

  <template v-else>
    <a
      :href="`#${item.id}`"
      class="block mb-1 transition-colors hover:text-primary-500 dark:hover:text-primary-200"
    >
      {{ item.text }}
    </a>
  </template>
</template>

<script setup lang="ts">
import { NavItem, TocLink } from '@nuxt/content/dist/runtime/types';

defineProps({
  item: {
    type: Object as PropType<NavItem | TocLink>,
    default: () => {},
  },
});

const isNavItem = (item: NavItem | TocLink): item is NavItem => {
  return (<NavItem>item)._path !== undefined;
};
</script>

<style lang="postcss">
.router-link-active {
  @apply text-primary-500 font-medium;
}

.router-link-exact-active {
  @apply text-primary-400 font-medium;
}
</style>
