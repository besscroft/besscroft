<script setup lang="ts">
import { isDark } from '~/composables'

defineOptions({
  name: 'IndexPage',
})
</script>

<template>
  <div class="mt-20">
    <div class="m-auto w-40"><img class="rounded-full" src="https://besscroft.com/uploads/avatar.jpeg" alt="Bess Croft"></div>
    <p class="m-2">
      <a rel="noreferrer" class="font-serif text-3xl" href="https://github.com/besscroft" target="_blank">
        Bess Croft
      </a>
    </p>
    <p>
      <em text-sm op75 class="font-serif">上学时看《神话》，有 50 集；毕业后看《神话》，只有 8 集。</em>
    </p>

    <div py-4 />
    <div>
      <a
        class="inline-block rounded-full bg-gradient-to-r p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
        target="blank" href="https://github.com/besscroft">
        <img src="https://img.shields.io/badge/GitHub-Follow-brightgreen?style=flat-square" alt="GitHub">
      </a>
    </div>
    <div class="mt-4">
      <a
        class="inline-block rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
        href="https://blog.besscroft.com"
      >
        <span
          v-if="isDark"
          class="block rounded-full bg-black px-8 py-3 text-sm font-medium hover:bg-transparent font-serif"
        >
          博客
        </span>
        <span
          v-else
          class="block rounded-full bg-white px-8 py-3 text-sm font-medium hover:bg-transparent font-serif"
        >
          博客
        </span>
      </a>
    </div>
  </div>
</template>
