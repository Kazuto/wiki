<template>
  <NuxtLink
    :href="href"
    :target="target || (isExternal ? '_blank' : undefined)"
  >
    <slot />
    <Icon
      v-if="isExternal"
      name="heroicons:arrow-top-right-on-square"
    />
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
  const tmp = document.createElement('a');
  tmp.href = props.href;

  isExternal.value = tmp.host !== window.location.host;

  tmp.remove();
});
</script>

<style lang="postcss" scoped>
a {
  @apply inline-flex items-center text-primary-500 hover:text-primary-800;

  > svg {
    @apply w-3.5 h-auto inline-block ml-1;
  }
}
</style>
