<script>
/*export default {
  name: "create-space-add-photo.component",
  data() {
    return {
      photos: []
    };
  },
  methods: {
    handleFileUpload(event) {
      const files = event.target.files;
      for (let i = 0; i < files.length; i++) {
        this.photos.push(files[i]);
      }
    }
  }
}*/
import { inject } from 'vue';
import { formStore } from '../services/local.store.js';

export default {
  name: "create-space-add-photo",
  setup() {
    const localStore = inject('formStore');

    const handleFileUpload = (event) => {
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        localStore.photoUrl = reader.result;
      };
      reader.onerror = (error) => {
        console.error("Error loading file:", error);
      };

      if (file) {
        reader.readAsDataURL(file);
      }
    };

    return {
      localStore,
      handleFileUpload
    };
  },
  data() {
    return {
      photo: null
    };
  }
}
</script>

<template>
  <div class="container-add-photo">
    <div class="text-center">
      <h2 class="text-4xl font-bold mb-4">Add a photo of your space</h2>
      <p class="text-gray-500 mb-4">
        To start, you will need one photo. You can add more later.
      </p>
    </div>
  </div>
  <div class="container-add-photo">
    <div class="border-photo">
      <div class="border-container">
        <img src="../../assets/add-photo-icon.png" alt="icon" class="w-14 h-14 mb-2 mx-auto">
        <p class="mb-2 font-bold text-center">Drag the photo</p>
        <p class="mb-2 text-gray-500">Choose a photo</p>
        <input type="file" @change="handleFileUpload" class="file-input">
      </div>
    </div>
  </div>

  <hr class="border-1 shadow-2 border-gray-300">
  <router-link to="/stand-out">
    <pv-button class="back-next" style="left: 0%; margin-left:6%;">Back</pv-button>
  </router-link>

  <router-link to="/title">
    <pv-button class="back-next" style="left: 80%; margin-left:-11%;">Next</pv-button>
  </router-link>
  <!--<div class="container-add-photo">
    <div class="text-center">
      <h2 class="text-4xl font-bold mb-4">Add some photos of your space</h2>
      <p class="text-gray-500 mb-4">
        To start, you will need four photos. Afterwards, you can
        <br>add more or make changes.
      </p>
    </div>
  </div>
  <div class="container-add-photo">
    <div class="border-photo">
      <div class="border-container">
        <img src="../../assets/add-photo-icon.png" alt="icon" class="w-14 h-14 mb-2 mx-auto">
        <p class="mb-2 font-bold text-center">Drag the photos</p>
        <p class="mb-2 text-gray-500">Choose at least 5 photos</p>
        <input type="file" multiple @change="handleFileUpload" class="file-input">
      </div>
    </div>
  </div>

  <hr class="border-1 shadow-2 border-gray-300">
  <router-link to="/stand-out">
    <pv-button class="back-next" style="left: 0%; margin-left:6%;">Back</pv-button>
  </router-link>

  <router-link to="/title">
    <pv-button class="back-next" style="left: 80%; margin-left:-11%;">Next</pv-button>
  </router-link>-->
</template>

<style scoped>
.container-add-photo {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  justify-content: center;
}
.border-container{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.border-photo {
  border: dashed;
  width: 400px;
  height: 350px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.file-input {
  display: none;
  justify-content: center;
}

.border-photo:hover .file-input {
  display: block;
  cursor: pointer;
}
</style>
