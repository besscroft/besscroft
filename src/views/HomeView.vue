<script setup lang="ts">
import { Motion } from 'motion-v'
import GeometricBackground from '../components/GeometricBackground.vue'
import CornerDecorations from '../components/CornerDecorations.vue'

const namePrefix = '旅行者'
const nameSuffix = '的随想'
</script>

<template>
  <div class="relative h-screen w-full bg-black flex items-center justify-center overflow-hidden">
    <GeometricBackground />

    <!-- 主内容区域 -->
    <div class="relative z-10 flex flex-col items-center text-center px-6">
      <CornerDecorations />

      <!-- DEVELOPER 标签 -->
      <Motion
        as="div"
        class="mb-4 px-4 py-1.5 border border-[#D8FA00]/40 text-[#D8FA00] text-[10px] sm:text-xs tracking-[0.3em] font-medium"
        :initial="{ opacity: 0, y: -20 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.6, delay: 0.2 }"
      >
        ZZZVoid
      </Motion>

      <!-- 名字 -->
      <Motion
        as="h1"
        class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-wide leading-none"
        :initial="{ opacity: 0, y: 50 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.8, delay: 0.4, ease: 'easeOut' }"
      >
        <span class="text-white">{{ namePrefix }}</span
        ><span
          class="text-[#D8FA00]"
          style="
            text-shadow:
              0 0 40px rgba(216, 250, 0, 0.3),
              0 0 80px rgba(216, 250, 0, 0.15);
          "
          >{{ nameSuffix }}</span
        >
      </Motion>

      <!-- 简介 -->
      <Motion
        as="p"
        class="mt-6 sm:mt-8 text-sm sm:text-base md:text-lg text-gray-500 font-light tracking-wide"
        :initial="{ opacity: 0, y: 20 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.8, delay: 0.8, ease: 'easeOut' }"
      >
        <span class="text-[#D8FA00]/60 mr-2">//</span>在代码与想象之间，构建属于自己的世界<span
          class="cursor-blink inline-block w-0.5 h-[1em] bg-[#D8FA00] ml-1 align-middle"
        />
      </Motion>

      <!-- 按钮组 -->
      <div class="mt-8 sm:mt-10 flex gap-3 sm:gap-4">
        <Motion
          as="a"
          href="https://github.com/besscroft"
          target="_blank"
          rel="noopener noreferrer"
          class="group relative overflow-hidden px-8 sm:px-10 py-3 sm:py-3.5 bg-[#D8FA00] text-black text-xs sm:text-sm font-bold tracking-wider"
          :initial="{ opacity: 0, y: 20 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.6, delay: 1.0 }"
          :whileHover="{ scale: 1.08 }"
          :whileTap="{ scale: 0.92 }"
        >
          <!-- 扫光效果 -->
          <div
            class="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-out bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"
          />
          <!-- 边框光效 -->
          <div
            class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[inset_0_0_20px_rgba(216,250,0,0.5)]"
          />
          <span class="relative z-10">GITHUB</span>
        </Motion>
      </div>
    </div>

    <!-- 底部版权 -->
    <Motion
      as="div"
      class="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 text-[10px] sm:text-xs text-gray-600 tracking-widest"
      :initial="{ opacity: 0 }"
      :animate="{ opacity: 1 }"
      :transition="{ duration: 1, delay: 1.5 }"
    >
      <span class="text-gray-500">© 2026</span>
      <span class="mx-2 sm:mx-3 text-[#D8FA00]/40">•</span>
      <span class="text-gray-400">Bess Croft</span>
      <span class="mx-2 sm:mx-3 text-[#D8FA00]/40">•</span>
      <span class="text-gray-500">ZZZVoid</span>
    </Motion>
  </div>
</template>

<style scoped>
.cursor-blink {
  animation: blink 1s step-end infinite;
}

@keyframes blink {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}
</style>
