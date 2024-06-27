<script>
import {inject} from "vue";
import {formStore} from "../services/local.store.js";

export default {
  name: "create-space-describe-option",
  setup() {
    const localStore = inject('formStore');

    return { localStore };
  },
  data() {
    return {
      selectedOption: null
    };
  },
  methods: {
    selectOption(option, id) {
      this.selectedOption = option;
      this.localStore.localCategoryId = id;
    }
  }
}
</script>

<template>
  <div class="container">
    <div class="container-add-photo">
      <h2 class="text-2xl font-medium mb-6">Which of these options best describes your space?</h2>
    </div>
    <div class="container-add-photo">
      <div class="container-describe-option">
        <pv-button
            class="options-button"
            :class="{ 'selected': selectedOption === 'beach-house' }"
            @click="selectOption('beach-house', 1)"
        >
          <img src="../../assets/describe-option-icon1.png" class="img-option-button" alt="icon1" />
          Beach House
        </pv-button>
        <pv-button
            class="options-button"
            :class="{ 'selected': selectedOption === 'urban-house' }"
            @click="selectOption('urban-house', 2)"
        >
          <img src="../../assets/describe-option-icon2.png" class="img-option-button" alt="icon2" />
          Urban House
        </pv-button>
      </div>
    </div>
    <div class="container-add-photo">
      <div class="container-describe-option">
        <pv-button
            class="options-button"
            :class="{ 'selected': selectedOption === 'elegant-halls' }"
            @click="selectOption('elegant-halls', 3)"
        >
          <img src="../../assets/describe-option-icon3.png" class="img-option-button" alt="icon3" />
          Elegant Halls
        </pv-button>
        <pv-button
            class="options-button"
            :class="{ 'selected': selectedOption === 'country-house' }"
            @click="selectOption('country-house', 4)"
        >
          <img src="../../assets/describe-option-icon4.png" class="img-option-button" alt="icon4" />
          Country House
        </pv-button>
      </div>
    </div>
  </div>
  <hr class="border-1 shadow-2 border-gray-300">
  <router-link to="/describe">
    <pv-button class="back-next" style="left: 0%; margin-left:6%;">Back</pv-button>
  </router-link>

  <router-link to="/confirm-direction">
    <pv-button class="back-next" style="left: 80%; margin-left:-11%;">Next</pv-button>
  </router-link>
</template>

<style scoped>
.container-describe-option {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.options-button {
  background-color: #ffffff;
  color: black;
  border-radius: 8px;
  padding: 10px 20px;
  border: 2px solid grey;
  width: 150px;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 15px;
  transition: transform 0.3s, box-shadow 0.3s;
}

.container {
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 70vh;
  justify-content: center;
}

.options-button:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  border-color: #D13333;
  background-color: #f9f9f9;
}

.options-button.selected {
  border-color: #D13333;
  background-color: #f9f9f9;
}

.img-option-button {
  width: 10vh;
  height: 10vh;
  margin-bottom: 15px;
}

.back-next {
  background-color: #D13333;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.back-next:hover {
  background-color: #b02929;
}
</style>
