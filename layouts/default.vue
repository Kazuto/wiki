<template>
  <div class="bg-gray-50 dark:bg-gray-900 text-gray-600 dark:text-gray-100">
    <div class="min-h-screen grid grid-cols-[auto_1fr]">
      <vNavigationSidebarMenu />

      <div class="flex flex-col">
        <vLayoutHeader />

        <main class="my-8 mx-16 flex-grow">
          <vContainer class="grid grid-cols-[1fr_400px]">
            <vLayoutArticle
              v-if="page"
              class="p-6 flex-grow"
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
