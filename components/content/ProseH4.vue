<template>
  <h4 :id="id">
    <a
      v-if="id && generate"
      :href="`#${id}`"
    >
      <slot />
    </a>
    <slot v-else />
  </h4>
</template>

<script setup lang="ts">
const config = useRuntimeConfig();

defineProps<{ id?: string }>();

const heading = 4;
const { anchorLinks } = config.public.content;
const generate =
  anchorLinks?.depth >= heading && !anchorLinks?.exclude.includes(heading);
</script>

<style lang="postcss" scoped>
h4 {
  @apply font-medium text-xl mt-6 mb-3;

  a:before {
    content: '# ';
    @apply text-primary;
  }
}
</style>
