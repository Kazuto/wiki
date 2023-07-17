<template>
  <div>
    <button
      class="flex items-center w-full text-sm text-gray-400 border border-gray-200 dark:border-gray-700 rounded px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-800 transition text-left"
      @click.prevent="openSearch"
    >
      <Icon
        name="heroicons:magnifying-glass"
        class="mr-1"
      />
      Search...
    </button>
    <div
      v-if="isSearchOpen"
      class="fixed z-50 inset-0 bg-black bg-opacity-50"
      @click="closeSearch"
    >
      <div
        class="bg-gray-100 dark:bg-gray-800 w-1/3 rounded shadow mx-auto mt-56"
        @click.stop
      >
        <div>
          <input
            ref="input"
            v-model="searchQuery"
            type="text"
            placeholder="Search..."
            class="w-full bg-transparent focus:outline-none border-none p-4 placeholder:text-gray-400"
          />
        </div>

        <div
          v-if="searchResult.length > 0"
          class="border-t border-gray-300 dark:border-gray-700 p-2"
        >
          <NuxtLink
            v-for="item in searchResult"
            :key="item.title"
            :to="item.item._path"
            class="block p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition"
          >
            <div>
              <h2 class="font-bold text-lg">
                {{ item.item.title }}
              </h2>
              <p class="mb-0 text-sm">{{ item.item.description }}</p>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ParsedContent } from '@nuxt/content/dist/runtime/types';
import Fuse from 'fuse.js';

const content = ref<ParsedContent[]>([]);

const input = ref<HTMLInputElement | null>(null);

const isSearchOpen = ref<Boolean>(false);
const searchQuery = useDebounceRef<String>('', 250);
const searchResult = ref<Fuse.FuseResult<ParsedContent[]>[]>([]);

const options = {
  keys: ['title', 'description'],
};

onMounted(async () => {
  await getContent();
});

async function getContent() {
  const response = await queryContent('/').find();

  content.value = response.filter((document: any) => !document.is_dir);

  Fuse.createIndex(options.keys, content.value);
}

const openSearch = () => {
  isSearchOpen.value = true;
};

const closeSearch = () => {
  isSearchOpen.value = false;

  searchQuery.value = '';
};

watch(isSearchOpen, (val) => {
  if (val) {
    input.value?.focus();
  }
});

watch(searchQuery, () => {
  const fuse = new Fuse(content.value, options);

  searchResult.value = fuse.search(searchQuery.value);
});
</script>
