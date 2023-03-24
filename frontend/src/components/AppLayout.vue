<template>
  <div class="h-screen flex">
    <!-- Sidebar -->
    <SideBar :class="{ '-ml-[200px]': !sidebarOpened }"></SideBar>
    <!-- SideBar -->
    <div class="flex-1">
      <TopHeader @toggle-sidebar="toggleSideBar"> </TopHeader>
      <!-- Content -->
      <main class="p-10">
        <div class="p-4 round">
          <router-view></router-view>
        </div>
      </main>
      <!-- Content -->
    </div>
  </div>
</template>

<script setup>
import SideBar from "./SideBar.vue";
import TopHeader from "./TopHeader.vue";
import { ref, onMounted, onUnmounted } from "vue";

const sidebarOpened = ref(true);

function toggleSideBar() {
  sidebarOpened.value = !sidebarOpened.value;
}
function updateSidebarState() {
  sidebarOpened.value = window.innerWidth > 768;
}

onMounted(() => {
  updateSidebarState();
  window.addEventListener("resize", updateSidebarState);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateSidebarState);
});
</script>

<style></style>
