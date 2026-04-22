<script setup lang="ts">
import { Motion } from 'motion-v'
</script>

<template>
  <div class="absolute inset-0 pointer-events-none">
    <!-- 左上大三角 -->
    <Motion
      as="div"
      class="absolute -top-[20%] -left-[10%] w-[60vw] h-[60vw] border border-[#D8FA00]/5"
      style="transform: rotate(45deg)"
      :initial="{ opacity: 0, scale: 0.8 }"
      :animate="{ opacity: 1, scale: 1 }"
      :transition="{ duration: 2, delay: 0.5 }"
    />
    <!-- 右下大三角 -->
    <Motion
      as="div"
      class="absolute -bottom-[20%] -right-[10%] w-[50vw] h-[50vw] border border-[#D8FA00]/5"
      style="transform: rotate(45deg)"
      :initial="{ opacity: 0, scale: 0.8 }"
      :animate="{ opacity: 1, scale: 1 }"
      :transition="{ duration: 2, delay: 0.8 }"
    />
    <!-- 背景绿色光晕 -->
    <Motion
      as="div"
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#D8FA00]/[0.03] blur-[120px]"
      :initial="{ opacity: 0 }"
      :animate="{ opacity: 1 }"
      :transition="{ duration: 3 }"
    />
    <!-- 小方块装饰 -->
    <Motion
      as="div"
      class="absolute top-[18%] left-[12%] w-2 h-2 bg-[#D8FA00]/30"
      :initial="{ opacity: 0 }"
      :animate="{ opacity: [0.3, 0.6, 0.3] }"
      :transition="{ duration: 3, repeat: Infinity }"
    />
    <Motion
      as="div"
      class="absolute top-[25%] right-[15%] w-1.5 h-1.5 bg-[#D8FA00]/20"
      :initial="{ opacity: 0 }"
      :animate="{ opacity: [0.2, 0.5, 0.2] }"
      :transition="{ duration: 4, repeat: Infinity, delay: 1 }"
    />
    <Motion
      as="div"
      class="absolute bottom-[30%] left-[20%] w-2 h-2 bg-[#D8FA00]/25"
      :initial="{ opacity: 0 }"
      :animate="{ opacity: [0.25, 0.5, 0.25] }"
      :transition="{ duration: 3.5, repeat: Infinity, delay: 0.5 }"
    />
    <Motion
      as="div"
      class="absolute bottom-[22%] right-[18%] w-1.5 h-1.5 bg-[#D8FA00]/20"
      :initial="{ opacity: 0 }"
      :animate="{ opacity: [0.2, 0.4, 0.2] }"
      :transition="{ duration: 5, repeat: Infinity, delay: 2 }"
    />
  </div>
</template>
