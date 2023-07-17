<template>
  <article class="p-6 flex-grow">
    <span class="block mb-2 text-primary font-bold capitalize">
      {{ page._dir }}
    </span>

    <h1 class="text-5xl font-medium mb-4">
      {{ page.title }}
    </h1>

    <slot />

    <div class="flex items-between mt-4">
      <NuxtLink
        v-if="prev"
        class="text-gray-500 dark:text-gray-300 hover:text-primary-500 transition"
        :to="prev._path"
      >
        &larr; {{ prev.title }}
      </NuxtLink>
      <span class="grow"></span>
      <NuxtLink
        v-if="next"
        class="text-gray-500 dark:text-gray-300 hover:text-primary-500 transition"
        :to="next._path"
      >
        {{ next.title }} &rarr;
      </NuxtLink>
    </div>
  </article>

  <vNavigationContentMenu v-if="page" />
</template>

<script setup lang="ts">
const { prev, next, page } = useContent();
</script>

<style lang="postcss"></style>
