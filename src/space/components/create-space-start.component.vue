<script>
export default {
  name: "create-space-start.component",
  props: ['showCreateSpace'],
  methods: {
    createSpaceStart () {
      this.$emit('update:showCreateSpace', true);
    }
  },
  emits: ['update:showCreateSpace'],
}
</script>

<template>
  <div class="container-dir">
    <div class="left-row-confirm">
      <h1 class="text-4xl font-bold">Starting to use<br>AlquilaFacil is very<br>simple</h1>
    </div>
    <div class="right-row-confirm">
      <div class="enum-start">
        <img src="../../assets/icon-step1.png" alt="Step 1" class="img-start">
        <div>
          <h2 class="font-bold">1 Describe your space</h2>
          <p class="text-gray-500">Share some basic details.</p>
        </div>
      </div>
      <div class="enum-start">
        <img src="../../assets/icon-step2.png" alt="Step 2" class="img-start">
        <div>
          <h2 class="font-bold">2 Make it stand out</h2>
          <p class="text-gray-500">Add at least 4 photos, a title, and a <br> description. We'll take care of the rest.</p>
        </div>
      </div>
      <div class="enum-start">
        <img src="../../assets/icon-step3.png" alt="Step 3" class="img-start">
        <div>
          <h2 class="font-bold">3 Finish and publish</h2>
          <p class="text-gray-500">Add the final settings and publish your space.</p>
        </div>
      </div>
    </div>
  </div>
  <hr class="border-1 shadow-2 border-gray-300">
  <router-link to="/describe">
    <pv-button class="back-next" style="left: 80%; margin-left:0%;">Let's get started</pv-button>
  </router-link>
</template>

<style scoped>
.container-dir {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  min-height: 80vh;
  text-align: center;
}

.left-row-confirm {
  flex: 1;
  margin-right: 20px;
}

.right-row-confirm {
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.enum-start {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
  text-align: left;
}

.img-start {
  width: 14vh;
  height: 14vh;
  margin-right: 20px;
}

.back-next {
  display: inline-block;
  margin-top: 20px;
}
</style>
