<script>
export default {
  name: "create-space-post",
}
</script>

<template>
  <div class="container-dir">
    <div class="left-column-confirm">
      <div>
        <h2 class="mb-12 font-bold">Step 3</h2>
        <h1 class="text-4xl mb-12 font-bold">Finish and publish</h1>
        <p class="text-gray-500 mb-12">Finally, you will choose the price and advertise your space.</p>
      </div>
    </div>
    <div class="right-column-confirm">
      <img src="../../assets/image-step3.jpg" alt="Image description" class="img-confirm-dir small-img">
    </div>
  </div>
  <router-link to="/title">
    <pv-button class="back-next" style="left: 0%; margin-left:6%;">Back</pv-button>
  </router-link>

  <router-link to="/price">
    <pv-button class="back-next" style="left: 80%; margin-left:-11%;">Next</pv-button>
  </router-link>
</template>

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
  max-width: 65%;
}
</style>
