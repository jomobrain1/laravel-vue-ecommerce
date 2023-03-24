<template>
  <GuestLayout title="Request For Password Change">
    <div class="flex items-center text-lg mb-6 md:mb-8">
      <input
        type="email"
        id="email"
        class="bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full"
        placeholder="Enter Email"
      />
    </div>

    <button
      class="bg-gradient-to-b from-gray-700 to-gray-900 font-medium p-2 md:p-4 text-white uppercase w-full"
    >
      Reset Password
    </button>
    <div class="flex justify-between text-lg mt-3 px-4">
      <router-link to="/login" class="text-green-400 underline"
        >sign in</router-link
      >
      <router-link
        class="text-green-400 underline"
        :to="{ name: 'RequestPassword' }"
        >request password</router-link
      >
    </div>
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
