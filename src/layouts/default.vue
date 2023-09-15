<script setup lang="ts">
const bgStyle = computed(() => {
  return {
    backgroundImage: `url('${isDark.value ? '' : 'public/assets/img/hero.jpg'}')`,
  }
})
</script>

<template>
  <div flex flex-col h-full bg-center bg-repeat bg-cover :style="bgStyle">
    <div h-24>
      <Header />
    </div>
    <div flex-grow overflow-auto scrollbar-hidden p-2>
      <RouterView />
    </div>
  </div>
</template>
