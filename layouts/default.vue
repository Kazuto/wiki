<template>
  <div class="bg-gray-50 text-gray-600 dark:bg-gray-900 dark:text-gray-100">
    <div class="grid min-h-screen lg:grid-cols-[auto_1fr]">
      <vNavigationSidebarMenu />
      <vNavigationSidebarMenuMobile
        v-show="isMenuOpen"
        @toggle-menu="isMenuOpen = false"
      />

      <div class="flex flex-col">
        <vLayoutHeader @toggle-menu="isMenuOpen = true" />

        <main class="mx-8 my-8 flex-grow xl:mx-16">
          <vContainer class="xl:p-6">
            <vLayoutArticle
              v-if="page"
              class="flex-grow"
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

const isMenuOpen = ref(false);

watch(isMenuOpen, (value) => {
  if (value) {
    document.body.classList.add('overflow-hidden');
  } else {
    document.body.classList.remove('overflow-hidden');
  }
});
</script>

<style lang="postcss"></style>
