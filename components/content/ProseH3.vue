<template>
  <h3 :id="id">
    <a
      v-if="id && generate"
      :href="`#${id}`"
    >
      <slot />
    </a>
    <slot v-else />
  </h3>
</template>

<script setup lang="ts">
const config = useRuntimeConfig();

defineProps<{ id?: string }>();

const heading = 3;
const { anchorLinks } = config.public.content;
const generate =
  anchorLinks?.depth >= heading && !anchorLinks?.exclude.includes(heading);
</script>

<style lang="postcss" scoped>
h3 {
  @apply font-normal text-2xl mt-10 mb-4;

  a:before {
    content: '# ';
    @apply text-primary;
  }
}
</style>
