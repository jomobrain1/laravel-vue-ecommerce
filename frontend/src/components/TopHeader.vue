<template>
  <header class="h-16 shadow bg-white">
    <div class="flex align-center justify-between px-16 py-3">
      <button
        @click="emit('toggle-sidebar')"
        class="hover:bg-black/10 p-3 transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 font-bold"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>

      <button class="bg-blue-900 px-3 py-1 text-white">log out</button>
    </div>
  </header>
</template>
<script setup>
const emit = defineEmits(["toggle-sidebar"]);
</script>
