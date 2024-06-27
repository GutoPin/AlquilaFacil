<script>
import {inject} from "vue";

export default {
  name: "create-space-title",
  setup() {
    const localStore = inject('formStore');

    return { localStore };
  }
}
</script>
<template>
  <div class="text-center mb-8 container">
    <h1 class="mt-20 mb-4 text-4xl font-bold">Now, give your house a description!</h1>
    <p class="text-gray-500 mb-4">Short descriptions work best. Don't worry, you can modify it later.</p>
    <textarea v-model="localStore.descriptionMessage" class="mb-8 border-2 border-gray-400 p-4 rounded-md placeholder-gray-400
              focus:outline-none focus:ring focus:border-gray-700"
              placeholder="Write something here" rows="4" cols="50"></textarea>
  </div>

  <router-link to="/add-photo">
    <pv-button class="back-next" style="left: 0%; margin-left:6%;">Back</pv-button>
  </router-link>

  <router-link to="/post">
    <pv-button class="back-next" style="left: 80%; margin-left:-11%;">Next</pv-button>
  </router-link>
</template>

<style scoped>

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 60vh;
}
</style>
