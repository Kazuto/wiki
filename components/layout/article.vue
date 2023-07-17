<template>
  <article class="flex-grow p-6">
    <span class="mb-2 block font-bold capitalize text-primary">
      {{ page._dir }}
    </span>

    <h1 class="mb-4 text-5xl font-medium">
      {{ page.title }}
    </h1>

    <slot />

    <div class="items-between mt-4 flex">
      <NuxtLink
        v-if="prev"
        class="text-gray-500 transition hover:text-primary-500 dark:text-gray-300"
        :to="prev._path"
      >
        &larr; {{ prev.title }}
      </NuxtLink>
      <span class="grow"></span>
      <NuxtLink
        v-if="next"
        class="text-gray-500 transition hover:text-primary-500 dark:text-gray-300"
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
