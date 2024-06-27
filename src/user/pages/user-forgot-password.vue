<script setup>
import { ref } from 'vue'

import TheUserForgotPassword from "../components/the-user-forgot-password.component.vue";

const showLogin = ref(false);
const showEmailLogin = ref(false);

const handleShowLoginUpdate = (value) => {
  showLogin.value = value;
};
const handleShowEmailLoginUpdate = (value) => {
  showEmailLogin.value = value;
};

</script>

<template>
  <the-user-forgot-password/>
</template>

<style scoped>

</style>
