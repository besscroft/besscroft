<template>
  <div>
    <!-- 404 page content -->
  </div>
</template>
<script setup lang="ts">
onMounted(() => {
  // 404 page script
  let nav = document.createElement('script')
  nav.type = 'text/javascript'
  nav.src = '//qzonestyle.gtimg.cn/qzone/hybrid/app/404/search_children.js'
  document.body.appendChild(nav)
})
</script>
