<script setup lang="ts">
import { Motion } from 'motion-v'

const namePrefix = '旅行者'
const nameSuffix = '的随想'
</script>

<template>
  <div class="relative h-screen w-full bg-black flex items-center justify-center overflow-hidden">
    <!-- 背景大三角形 -->
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

    <!-- 主内容区域 -->
    <div class="relative z-10 flex flex-col items-center text-center px-6">
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
        <span class="text-[#D8FA00]/60 mr-2">//</span>在代码与想象之间，构建属于自己的世界
      </Motion>

      <!-- 按钮组 -->
      <div class="mt-8 sm:mt-10 flex gap-3 sm:gap-4">
        <Motion
          as="a"
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          class="px-6 sm:px-8 py-2.5 sm:py-3 bg-[#D8FA00] text-black text-xs sm:text-sm font-bold tracking-wider hover:bg-[#e0ff1a] transition-colors"
          :initial="{ opacity: 0, y: 20 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.6, delay: 1.0 }"
          :whileHover="{ scale: 1.05 }"
          :whileTap="{ scale: 0.95 }"
        >
          GITHUB
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
