<template>
  <h2 :id="id">
    <a
      v-if="id && generate"
      :href="`#${id}`"
    >
      <slot />
    </a>
    <slot v-else />
  </h2>
</template>

<script setup lang="ts">
const config = useRuntimeConfig();

defineProps<{ id?: string }>();

const heading = 2;
const { anchorLinks } = config.public.content;
const generate =
  anchorLinks?.depth >= heading && !anchorLinks?.exclude.includes(heading);
</script>

<style lang="postcss" scoped>
h2 {
  @apply font-normal text-3xl mt-14 mb-5;

  a:before {
    content: '# ';
    @apply text-primary;
  }
}
</style>
