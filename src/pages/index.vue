<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div flex flex-col items-center justify-center mt-20>
    <div m-auto w-40 h-46>
      <img rounded-full src="https://besscroft.com/uploads/avatar.jpg" alt="Bess Croft">
    </div>
    <p m-2 h-8 text-2xl>
      云淑
    </p>
    <p text-center>
      <em text-sm op75>为天地立心、为生民立命<br>为往圣继绝学、为万世开太平</em>
    </p>

    <div py-4 />
    <div flex flex-col space-y-2 h-16>
      <a mxa target="blank" href="https://github.com/besscroft">
        <img src="https://img.shields.io/badge/GitHub-Follow-brightgreen?style=flat-square" alt="GitHub">
      </a>
      <a mxa href="https://wakatime.com/@ed85fdbe-1020-4a72-97fd-9a6a63122be3">
        <img src="https://wakatime.com/badge/user/ed85fdbe-1020-4a72-97fd-9a6a63122be3.svg" alt="Total time coded since Jun 18 2022">
      </a>
    </div>
    <div class="mt-4">
      <button flex items-center justify-center w-20 h-8 of-hidden rounded-3xl border-dashed hover:border-solid border border-gray-400>
        <a href="https://blog.besscroft.com" target="_blank" flex justify-center items-center>
          <span>博客</span>
        </a>
      </button>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: default
</route>
