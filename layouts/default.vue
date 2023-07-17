<template>
  <div class="bg-gray-50 text-gray-600 dark:bg-gray-900 dark:text-gray-100">
    <div class="grid min-h-screen grid-cols-[auto_1fr]">
      <vNavigationSidebarMenu />

      <div class="flex flex-col">
        <vLayoutHeader />

        <main class="mx-16 my-8 flex-grow">
          <vContainer class="grid grid-cols-[1fr_400px]">
            <vLayoutArticle
              v-if="page"
              class="flex-grow p-6"
            >
              <slot />
            </vLayoutArticle>

            <slot v-else />
          </vContainer>
        </main>

        <vLayoutFooter />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { page } = useContent();
</script>

<style lang="postcss"></style>
