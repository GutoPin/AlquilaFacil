<script>
import {inject} from "vue";
import {useRouter} from "vue-router";
import {CardEndpoint} from "../../content/services/card-endpoint.service.json.js";

export default {
  name: "create-space-price",
  setup() {
    const localStore = inject('formStore');
    const router = useRouter();
    const cardApi = new CardEndpoint();

    const submitForm = () => {
      const payload = {
        ...localStore,
        localCategoryId: parseInt(localStore.localCategoryId, 10),
        price: parseInt(localStore.price, 10)
      };

      cardApi.createLocal(payload)
          .then(response => {
            console.log('Form submitted:', response.data);
            router.push('/finish');
          })
          .catch(error => {
            console.error('Error submitting form:', error);
          });
    };

    return { localStore, submitForm };
  }
}
</script>

<template>
  <div class="text-center mt-16 mb-36 container">
    <h1 class="text-4xl font-bold mb-12">Set the price by night</h1>
    <p class="text-gray-500 mb-12">Give a price to your space, you can change it whenever you want.</p>
    <pv-inputtext v-model="localStore.price" type="number" class="border border-gray-400 p-2 rounded-md mb-6 w-64 h-12 text-center" placeholder="Price"/>
    <p>Price for the organizer (taxes not included)</p>
  </div>

  <router-link to="/post">
    <pv-button class="back-next" style="left: 0%; margin-left:6%;">Back</pv-button>
  </router-link>

  <router-link to="/home">
  <pv-button class="back-next" style="left: 80%; margin-left:-11%;" @click="submitForm">Next</pv-button>
  </router-link>
</template>

<style scoped>

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 65vh;
}

</style>