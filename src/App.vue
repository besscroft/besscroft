<script setup lang="ts">
// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: '云淑',
  meta: [
    { name: 'description', content: '云淑的个人主页！' },
    {
      name: 'theme-color',
      content: () => isDark.value ? '#00aba9' : '#ffffff',
    },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: 'public/assets/img/black-cat.png',
    },
  ],
})
</script>

<template>
  <RouterView />
</template>
