<template>
  <div class="container-dir">
    <div class="left-column-confirm">
      <div>
        <h2 class="mb-12 font-bold">Step 2</h2>
        <h1 class="text-4xl mb-12 font-bold">Make your space
          <br> stand out</h1>
        <p class="text-gray-500 mb-12">In this step, you'll need to add some photos of your space.
          <br> Then, you'll need to create a title and a description.</p>
      </div>
    </div>
    <div class="right-column-confirm">
      <img src="../../assets/image-step2.png" alt="step2" class="img-confirm-dir small-img">
    </div>
  </div>
  <hr class="border-1 shadow-2 border-gray-300">
  <router-link to="/confirm-direction">
    <pv-button class="back-next" style="left: 0%; margin-left:6%;">Back</pv-button>
  </router-link>

  <router-link to="/add-photo">
    <pv-button class="back-next" style="left: 80%; margin-left:-11%;">Next</pv-button>
  </router-link>
</template>

<script>
export default {
  name: "create-space-stand-out.component"
}
</script>

<style scoped>
.container-dir {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.left-column-confirm {
  flex: 1;
}

.right-column-confirm {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.img-confirm-dir {
  max-width: 100%;
  height: auto;
}

.small-img {
  max-width: 60%; /* Ajusta el tamaño según sea necesario */
}
</style>
