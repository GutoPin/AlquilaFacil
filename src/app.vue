<script setup>
import { ref, provide } from 'vue';
import NavbarContent from './public/components/navbar-content.component.vue';
import FooterContent from './public/components/footer-content.component.vue';
import {formStore} from "./space/services/local.store.js";


const showLogin = ref(false);

const handleShowLoginUpdate = (value) => {
  showLogin.value = value;
};

provide('formStore', formStore);

</script>

<template>
  <div id="app">
    <navbar-content
        :showLogin="showLogin"
        @update:showLogin="handleShowLoginUpdate"
    />
    <div class="main-content">
      <router-view></router-view>
    </div>
    <footer-content></footer-content>
  </div>
</template>

<style>
html, body, #app {
  height: 100%;
  margin: 0;
}

#app {
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}
</style>
