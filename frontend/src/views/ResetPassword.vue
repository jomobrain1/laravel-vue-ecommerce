<template>
  <GuestLayout title="Reset Password Here">
    <div class="flex items-center text-lg mb-6 md:mb-8">
      <input
        type="password"
        id="password"
        class="bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full"
        placeholder="new password"
      />
    </div>
    <div class="flex items-center text-lg mb-6 md:mb-8">
      <input
        type="confirm_password"
        id="confirm_password"
        class="bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full"
        placeholder="confirm password"
      />
    </div>

    <button
      class="bg-gradient-to-b from-gray-700 to-gray-900 font-medium p-2 md:p-4 text-white uppercase w-full"
    >
      Reset Password
    </button>
  </GuestLayout>
</template>

<script>
import GuestLayout from "../components/GuestLayout.vue";

export default {
  setup() {
    return {};
  },
  components: { GuestLayout },
};
</script>

<style></style>
