<script>
export default {
  name: "create-space-describe.component"
}
</script>

<template>
  <div class="container-dir">
    <div class="left-column-confirm">
      <div>
        <h2 class="mb-12 font-bold">Step 1</h2>
        <h1 class="text-4xl mb-12 font-bold">Describe your space</h1>
        <p class="text-gray-500 mb-12">In this step, we will ask you what type of property you have.
          <br> Then, tell us the location and a few more details.</p>
      </div>
    </div>
    <div class="right-column-confirm">
      <img src="../../assets/image-step1.jpg" alt="Image description" class="img-confirm-dir">
    </div>
  </div>
  <hr class="border-1 shadow-2 border-gray-300">
  <router-link to="/start">
    <pv-button class="back-next" style="left: 0%; margin-left:6%;">Back</pv-button>
  </router-link>

  <router-link to="/describe-option">
    <pv-button class="back-next" style="left: 80%; margin-left:-11%;">Next</pv-button>
  </router-link>

</template>
