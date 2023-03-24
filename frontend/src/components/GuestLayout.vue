<template>
  <div
    class="bg-green-400 h-screen overflow-hidden flex items-center justify-center"
  >
    <div class="bg-white lg:w-5/12 md:6/12 w-10/12 shadow-3xl px-12 py-8">
      <div class="flex justify-center text-xl">
        <h1 class="text-center my-10 text-bold">{{ title }}</h1>
      </div>

      <slot></slot>
    </div>
  </div>
</template>

<script setup>
const { title } = defineProps({
  title: String,
});
</script>

<style></style>
