<script setup lang="ts">
import { ref } from 'vue'
import { Motion } from 'motion-v'
import GeometricBackground from '../components/GeometricBackground.vue'
import CornerDecorations from '../components/CornerDecorations.vue'

const isMenuOpen = ref(false)

const navItems = [
  { label: '首页', href: '#top' },
  { label: '能力', href: '#work' },
  { label: '链接', href: '#links' },
]

const featureCards = [
  {
    title: '全栈开发',
    meta: 'Java / TypeScript / Python / Go',
    body: '偏爱把后端、前端和基础设施连成能长期维护的产品骨架。',
    className: 'md:col-span-7',
  },
  {
    title: '摄影与记录',
    meta: 'Camera / Travel / Notes',
    body: '在代码之外保留观察世界的习惯，让页面、文章和影像都有一点现场感。',
    className: 'md:col-span-5',
  },
  {
    title: '工程系统',
    meta: 'Nuxt.js / Next.js / Serverless',
    body: '关注构建效率、部署体验和服务稳定性，让项目从想法走到可运行。',
    className: 'md:col-span-5',
  },
  {
    title: '创作入口',
    meta: 'Bilibili / Open source / Support',
    body: '把学习、实验和作品公开放置，方便后来的人沿着线索继续探索。',
    className: 'md:col-span-7',
  },
]

const linkCards = [
  {
    label: 'GitHub',
    href: 'https://github.com/besscroft',
    description: '代码、项目和开源活动',
  },
  {
    label: 'Bilibili',
    href: 'https://space.bilibili.com/278038021',
    description: '视频内容和日常分享',
  },
  {
    label: '爱发电',
    href: 'https://afdian.com/@besscroft',
    description: '支持我继续做有意思的东西',
  },
]
</script>

<template>
  <div
    id="top"
    class="relative min-h-[100dvh] overflow-x-hidden bg-[var(--color-bg)] text-[var(--color-text)]"
  >
    <GeometricBackground />

    <header
      class="sticky top-0 z-40 border-b border-white/10 bg-[color:rgb(5_5_5_/_0.86)] backdrop-blur-xl"
    >
      <nav class="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <a
          href="#top"
          class="group flex items-center gap-2 font-mono text-lg font-semibold tracking-[-0.01em] text-white"
          aria-label="回到首页"
        >
          <span>旅行者</span>
          <span
            class="grid h-6 min-w-6 place-items-center border border-[var(--color-accent)] px-1 font-mono text-[10px] leading-none text-[var(--color-accent)] transition-colors group-hover:bg-[var(--color-accent)] group-hover:text-black"
          >
            Z
          </span>
        </a>

        <div class="hidden items-center gap-8 md:flex">
          <a
            v-for="item in navItems"
            :key="item.href"
            :href="item.href"
            class="font-mono text-xs tracking-[0.18em] text-zinc-400 transition-colors hover:text-white"
          >
            {{ item.label }}
          </a>
        </div>

        <button
          type="button"
          class="grid h-10 w-10 place-items-center border border-white/15 text-white transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] md:hidden"
          :aria-expanded="isMenuOpen"
          aria-controls="mobile-menu"
          aria-label="打开导航菜单"
          @click="isMenuOpen = !isMenuOpen"
        >
          <span class="flex w-4 flex-col gap-1">
            <span class="h-px bg-current" />
            <span class="h-px bg-current" />
            <span class="h-px bg-current" />
          </span>
        </button>
      </nav>

      <div
        v-if="isMenuOpen"
        id="mobile-menu"
        class="border-t border-white/10 bg-[var(--color-bg)] px-5 py-4 md:hidden"
      >
        <div class="mx-auto grid max-w-6xl gap-3">
          <a
            v-for="item in navItems"
            :key="item.href"
            :href="item.href"
            class="border border-white/10 px-4 py-3 font-mono text-xs tracking-[0.18em] text-zinc-300"
            @click="isMenuOpen = false"
          >
            {{ item.label }}
          </a>
        </div>
      </div>
    </header>

    <main class="relative z-10 mx-auto max-w-6xl border-x border-white/10 px-5 sm:px-6 lg:px-8">
      <section
        class="grid min-h-[calc(100dvh-4rem)] items-center gap-10 py-16 md:grid-cols-[1.05fr_0.95fr] md:py-20"
      >
        <Motion
          as="div"
          class="max-w-3xl"
          :initial="{ opacity: 0, y: 28 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }"
        >
          <p class="mb-6 font-mono text-xs tracking-[0.22em] text-[var(--color-accent)]">ZZZVOID</p>
          <h1
            class="max-w-[10ch] text-[clamp(3.5rem,11vw,8.5rem)] font-black leading-[0.9] tracking-normal text-white"
          >
            旅行者的随想
          </h1>
          <p class="mt-7 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
            我是 Bess
            Croft，一名全栈开发工程师，也是一名摄影爱好者。在代码与想象之间，构建属于自己的世界。
          </p>
          <div class="mt-9 flex flex-wrap gap-3">
            <a
              href="https://github.com/besscroft"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex min-h-11 items-center justify-center whitespace-nowrap bg-[var(--color-accent)] px-5 font-mono text-xs font-semibold tracking-[0.16em] text-black transition-transform hover:-translate-y-0.5 active:translate-y-0"
            >
              GITHUB
            </a>
          </div>
        </Motion>

        <Motion
          as="aside"
          class="relative justify-self-stretch md:justify-self-end"
          :initial="{ opacity: 0, y: 36 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }"
          aria-label="Bess Croft profile card"
        >
          <div class="relative border border-white/12 bg-[#090909] p-3">
            <CornerDecorations />
            <div class="aspect-square overflow-hidden bg-zinc-100">
              <img
                src="https://github.com/besscroft.png?size=512"
                alt="Bess Croft 的 GitHub 头像"
                class="h-full w-full object-cover grayscale contrast-125"
                loading="eager"
                decoding="async"
                fetchpriority="high"
                width="512"
                height="512"
              />
            </div>
            <div class="grid gap-5 border-t border-white/10 px-1 pb-1 pt-5 sm:grid-cols-[1fr_auto]">
              <div>
                <p class="font-mono text-xl leading-tight text-white">Bess Croft</p>
                <p class="mt-2 font-mono text-xs leading-6 tracking-[0.14em] text-zinc-500">
                  FULL STACK DEVELOPER
                </p>
              </div>
              <div class="font-mono text-xs leading-6 text-zinc-500 sm:text-right">
                <p>Java / TS / Go</p>
                <p>DevOps / K8s</p>
              </div>
            </div>
          </div>
        </Motion>
      </section>

      <section id="work" class="border-t border-white/10 py-16 sm:py-20">
        <Motion
          as="div"
          class="max-w-2xl"
          :initial="{ opacity: 0, y: 24 }"
          :whileInView="{ opacity: 1, y: 0 }"
          :viewport="{ once: true, amount: 0.35 }"
          :transition="{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }"
        >
          <h2 class="text-3xl font-semibold leading-tight text-white sm:text-5xl">
            把想法做成能运行的东西。
          </h2>
          <p class="mt-5 text-base leading-8 text-zinc-400">
            页面、服务、部署和内容都不是孤岛。这里放的是我正在持续打磨的工作方式。
          </p>
        </Motion>

        <div class="mt-10 grid grid-cols-1 gap-4 md:grid-cols-12">
          <Motion
            v-for="(card, index) in featureCards"
            :key="card.title"
            as="article"
            :class="[
              'group min-h-56 border border-white/10 bg-[#080808] p-5 transition-colors hover:border-[var(--color-accent)]/70 sm:p-6',
              card.className,
            ]"
            :initial="{ opacity: 0, y: 24 }"
            :whileInView="{ opacity: 1, y: 0 }"
            :viewport="{ once: true, amount: 0.25 }"
            :transition="{ duration: 0.55, delay: index * 0.04, ease: [0.16, 1, 0.3, 1] }"
          >
            <div class="flex h-full flex-col justify-between gap-10">
              <p class="font-mono text-xs leading-6 tracking-[0.12em] text-zinc-500">
                {{ card.meta }}
              </p>
              <div>
                <h3 class="text-2xl font-semibold text-white">{{ card.title }}</h3>
                <p class="mt-4 max-w-[48ch] text-sm leading-7 text-zinc-400">{{ card.body }}</p>
              </div>
            </div>
          </Motion>
        </div>
      </section>

      <section id="links" class="border-t border-white/10 py-16 sm:py-20">
        <div class="max-w-2xl">
          <h2 class="text-3xl font-semibold leading-tight text-white sm:text-5xl">
            继续沿着这些线索看下去。
          </h2>
          <p class="mt-5 text-base leading-8 text-zinc-400">
            代码、视频和支持入口都放在这里。每个入口都指向真实站点。
          </p>
        </div>

        <div class="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Motion
            v-for="(link, index) in linkCards"
            :key="link.href"
            as="a"
            :href="link.href"
            target="_blank"
            rel="noopener noreferrer"
            class="group grid min-h-52 border border-white/10 bg-[#080808] p-5 transition-colors hover:border-[var(--color-accent)]/70 sm:p-6"
            :initial="{ opacity: 0, y: 24 }"
            :whileInView="{ opacity: 1, y: 0 }"
            :viewport="{ once: true, amount: 0.2 }"
            :transition="{ duration: 0.5, delay: index * 0.035, ease: [0.16, 1, 0.3, 1] }"
          >
            <span
              class="font-mono text-2xl leading-none text-white transition-colors group-hover:text-[var(--color-accent)]"
            >
              {{ link.label }}
            </span>
            <span class="self-end text-sm leading-7 text-zinc-500">{{ link.description }}</span>
          </Motion>
        </div>
      </section>
    </main>

    <footer
      class="relative z-10 mx-auto max-w-6xl border-x border-t border-white/10 px-5 py-8 sm:px-6 lg:px-8"
    >
      <div
        class="flex flex-col gap-3 font-mono text-xs tracking-[0.12em] text-zinc-500 sm:flex-row sm:items-center sm:justify-between"
      >
        <p>© 2026 Bess Croft</p>
        <p>旅行者的随想 / ZZZVoid</p>
      </div>
    </footer>
  </div>
</template>
