<template>
  <h1 :id="id">
    <a
      v-if="id && generate"
      :href="`#${id}`"
    >
      <slot />
    </a>
    <slot v-else />
  </h1>
</template>

<script setup lang="ts">
const config = useRuntimeConfig();

defineProps<{ id?: string }>();

const heading = 1;
const { anchorLinks } = config.public.content;
const generate =
  anchorLinks?.depth >= heading && !anchorLinks?.exclude.includes(heading);
</script>

<style lang="postcss" scoped>
h1 {
  @apply font-medium text-5xl mb-4;

  a:before {
    content: '# ';
    @apply text-primary;
  }
}
</style>
