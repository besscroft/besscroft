<script setup lang="ts">
import { Motion } from 'motion-v'
</script>

<template>
  <!-- 左上角装饰 -->
  <Motion
    as="div"
    class="absolute -top-20 -left-20 sm:-top-24 sm:-left-24"
    :initial="{ opacity: 0 }"
    :animate="{ opacity: 1 }"
    :transition="{ duration: 1, delay: 1.5 }"
  >
    <div class="w-10 h-10 border-l border-t border-[#D8FA00]/40" />
  </Motion>

  <!-- 右下角装饰 -->
  <Motion
    as="div"
    class="absolute -bottom-20 -right-20 sm:-bottom-24 sm:-right-24"
    :initial="{ opacity: 0 }"
    :animate="{ opacity: 1 }"
    :transition="{ duration: 1, delay: 1.7 }"
  >
    <div class="w-10 h-10 border-r border-b border-[#D8FA00]/40" />
  </Motion>
</template>
