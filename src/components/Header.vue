<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <div h-24 w-full flex items-center justify-center space-x-4 z-10>
    <div cursor-pointer i="carbon-home" @click="router.push('/')" />
    <a href="https://blog.besscroft.com" target="_blank">
      <div i="carbon-blog" />
    </a>
    <div cursor-pointer i="carbon-bot" @click="router.push('/about')" />
    <a href="https://github.com/besscroft" target="_blank">
      <div i="carbon-logo-github" />
    </a>
    <a href="https://blog.besscroft.com/rss.xml" target="_blank">
      <div i="carbon-rss" />
    </a>
    <DarkToggle />
  </div>
</template>

<style scoped>

</style>
