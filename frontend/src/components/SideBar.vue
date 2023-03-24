<template>
  <div class="w-[200px] transition-all bg-blue-700 text-white px-2 py-6">
    <router-link
      :to="{ name: 'app.dashboard' }"
      class="flex mb-2 px-10 py-2 items-end align-middle transition-colors hover:bg-black/30"
    >
      <span class="w-4 mr-4"> &#128274; </span>
      <span> Dashboard </span>
    </router-link>
    <router-link
      :to="{ name: 'app.products' }"
      class="flex mb-2 px-10 py-2 items-end align-middle transition-colors hover:bg-black/30"
    >
      <span class="w-4 mr-4"> </span>
      <span> Products</span>
    </router-link>
    <router-link
      :to="{ name: 'app.dashboard' }"
      class="flex mb-2 px-10 py-2 items-end align-middle transition-colors hover:bg-black/30"
    >
      <span class="w-4 mr-4"> </span>
      <span> Users</span>
    </router-link>
    <router-link
      :to="{ name: 'app.dashboard' }"
      class="flex mb-2 px-10 py-2 items-end align-middle transition-colors hover:bg-black/30"
    >
      <span class="w-4 mr-4"> </span>
      <span>Reports</span>
    </router-link>
  </div>
</template>

<script setup></script>
