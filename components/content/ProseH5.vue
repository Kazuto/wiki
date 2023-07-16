<template>
  <h5 :id="id">
    <a
      v-if="id && generate"
      :href="`#${id}`"
    >
      <slot />
    </a>
    <slot v-else />
  </h5>
</template>

<script setup lang="ts">
const config = useRuntimeConfig();

defineProps<{ id?: string }>();

const heading = 5;
const { anchorLinks } = config.public.content;
const generate =
  anchorLinks?.depth >= heading && !anchorLinks?.exclude.includes(heading);
</script>

<style lang="postcss" scoped>
h5 {
  @apply font-bold text-lg mt-3 mb-1;

  a:before {
    content: '# ';
    @apply text-primary;
  }
}
</style>
