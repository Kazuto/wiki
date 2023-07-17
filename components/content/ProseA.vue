<template>
  <NuxtLink
    :href="href"
    :target="target || (isExternal ? '_blank' : undefined)"
  >
    <Icon
      v-if="isExternal"
      name="heroicons:arrow-top-right-on-square"
    />
    <slot />
  </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps({
  href: {
    type: String,
    default: '',
  },
  target: {
    type: String,
    default: undefined,
    required: false,
  },
});

const isExternal = ref(false);

onMounted(() => {
  let href = props.href;

  if (props.href.startsWith('/')) {
    href = window.location.origin + props.href;
  }

  isExternal.value = new URL(href).hostname !== window.location.hostname;
});
</script>

<style lang="postcss" scoped>
a {
  @apply text-primary-500 hover:text-primary-800;

  > svg {
    @apply w-3.5 h-auto inline-block mr-0.5 mb-0.5;
  }
}
</style>
