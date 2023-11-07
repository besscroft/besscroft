<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <div h-24 w-full flex items-center justify-center space-x-4 z-10>
    <div cursor-pointer i="carbon-home" @click="router.push('/')" title="主页" />
    <a href="https://blog.besscroft.com" target="_blank" title="博客">
      <div i="carbon-blog" />
    </a>
    <a href="https://kamera.heming.dev/" target="_blank" title="旅行足迹">
      <div i="carbon-image-reference" />
    </a>
    <div cursor-pointer i="carbon-bot" @click="router.push('/about')" title="关于" />
    <a href="https://github.com/besscroft" target="_blank" title="GitHub">
      <div i="carbon-logo-github" />
    </a>
    <a href="https://blog.besscroft.com/rss.xml" target="_blank" title="RSS">
      <div i="carbon-rss" />
    </a>
    <DarkToggle />
  </div>
</template>

<style scoped>

</style>
