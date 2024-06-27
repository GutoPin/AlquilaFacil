<script>
import {inject} from "vue";

export default {
  name: "create-space-confirm-direction",
  setup() {
    const localStore = inject('formStore');

    return { localStore };
  }
}
</script>
<template>
  <div class="container-dir">
    <div class="left-column-confirm mx-auto">
      <h1 class="text-center">Confirm your address</h1>
      <h3 style="font-weight: normal" class="text-center">We will only share your address with those who have made a reservation</h3>

      <div class="mx-auto">
        <div class="flex flex-column gap-2">
          <label class="label-conf-dir" for="country">Country / region</label>
          <pv-inputtext id="country" v-model="localStore.country" aria-describedby="country" class="confirm-dir-input"/>
        </div>

        <div class="flex flex-column gap-2">
          <label class="label-conf-dir" for="address">Address</label>
          <pv-inputtext id="address" v-model="localStore.address" aria-describedby="address" class="confirm-dir-input"/>
        </div>

        <div class="flex flex-column gap-2">
          <label class="label-conf-dir" for="localType">Apartment, floor, building, condominium, etc.</label>
          <pv-inputtext id="localType" v-model="localStore.localType" aria-describedby="localType" class="confirm-dir-input"/>
        </div>

        <div class="flex flex-column gap-2">
          <label class="label-conf-dir" for="city">City</label>
          <pv-inputtext id="city" v-model="localStore.city" aria-describedby="city" class="confirm-dir-input"/>
        </div>

        <div class="flex flex-column gap-2">
          <label class="label-conf-dir" for="district">District / province</label>
          <pv-inputtext id="district" v-model="localStore.district" aria-describedby="district" class="confirm-dir-input"/>
        </div>
      </div>
    </div>
  </div>
  <hr class="border-1 shadow-2 border-gray-300">
  <router-link to="/describe-option">
    <pv-button class="back-next" style="left: 0%; margin-left:6%;">Back</pv-button>
  </router-link>

  <router-link to="/stand-out">
    <pv-button class="back-next" style="left: 80%; margin-left:-11%;">Next</pv-button>
  </router-link>
</template>


<style>
.back-next {
  background-color: #d13333;
  display: inline;
  width: 10%;
  border-radius: 8px;
  padding: 10px 20px;
  font-weight: bold;
  margin: 2% auto 5% auto;
}

.left-column-confirm {
  margin: 2% auto 3% 10%;
}

.container-dir {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 50vh;
}

.confirm-dir-input {
  width: 70%;
  padding: 10px 10px;
  border-radius: 10px;
}

.label-conf-dir {
  margin-top: 20px;
}

@media (max-width: 768px) {

  .back-next {
    width: 20%;
    padding: 10px 10px;
    margin-top: 0;
    margin-right: -20.5%;
  }
}
</style>