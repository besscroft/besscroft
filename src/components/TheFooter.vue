<template>
  <div class="fixed bottom-2 w-full font-serif">
    <p op90>©&nbsp;2018–{{ new Date().getFullYear() }}&nbsp;Bess Croft</p>
    <a op90 href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh" target="_blank" rel="noopener">CC BY-NC-SA 4.0</a>
    <br />
    <button icon-btn @click="toggleDark()" class="w-5">
      <div dark:i-carbon-moon i-carbon-sun />
    </button>
    <a
      class="w-5"
      icon-btn i-carbon-logo-github
      rel="noreferrer"
      href="https://github.com/besscroft"
      target="_blank"
      title="GitHub"
    />
  </div>
</template>
