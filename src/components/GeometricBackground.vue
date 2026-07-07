<script setup lang="ts">
import { Motion } from 'motion-v'
</script>

<template>
  <div class="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[var(--color-bg)]">
    <div
      class="absolute inset-0 opacity-[0.08]"
      style="
        background-image:
          linear-gradient(to right, rgba(255, 255, 255, 0.72) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255, 255, 255, 0.72) 1px, transparent 1px);
        background-size: 96px 96px;
      "
    />
    <div
      class="absolute inset-0 opacity-[0.18]"
      style="
        background:
          radial-gradient(circle at 50% 0%, rgba(216, 250, 0, 0.12), transparent 28rem),
          linear-gradient(180deg, rgba(255, 255, 255, 0.04), transparent 22rem);
      "
    />
    <Motion
      as="div"
      class="absolute left-[-12rem] top-24 h-80 w-80 rotate-45 border border-white/5"
      :initial="{ opacity: 0, scale: 0.9 }"
      :animate="{ opacity: 1, scale: 1 }"
      :transition="{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }"
    />
    <Motion
      as="div"
      class="absolute bottom-[-14rem] right-[-10rem] h-96 w-96 rotate-45 border border-white/5"
      :initial="{ opacity: 0, scale: 0.94 }"
      :animate="{ opacity: 1, scale: 1 }"
      :transition="{ duration: 1.2, delay: 0.08, ease: [0.16, 1, 0.3, 1] }"
    />
    <div
      class="absolute inset-0 opacity-[0.028]"
      style="
        background-image: radial-gradient(circle, rgba(255, 255, 255, 0.9) 1px, transparent 1px);
        background-size: 4px 4px;
      "
    />
  </div>
</template>
