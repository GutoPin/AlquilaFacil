<script>
export default {
  name: "create-space-finish",
}
</script>

<template>
  <div class="container">
    <div class="container-add-photo">
      <div class="text-center">
        <h1 class="text-4xl font-bold mb-4">That's it!</h1>
        <p class="text-gray-500">This is what we will show to others.</p>
      </div>
    </div>
    <div class="card-container">
      <pv-card class="finish-card">
        <template #content>
          <router-link to="/home-detail/1" class="router-link">
            <div class="container-img-home">
              <img src="../../assets/final-image.jpg" alt="Image description" class="img-home">
            </div>
            <div class="container-text-home">
              <p>Miraflores, Lima</p>
              <p class="text-gray-500">Beach House</p>
              <p><strong>S/. 1000</strong> per night</p>
            </div>
          </router-link>
        </template>
      </pv-card>
    </div>
  </div>
  <hr class="border-1 shadow-2 border-gray-300">
  <router-link to="/home">
    <pv-button class="back-next" style="left: 80%;">Next</pv-button>
  </router-link>
</template>

<style scoped>
.container-add-photo {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 1px;
}

.card-container {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.finish-card {
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
  margin: 20px 0;
  display: inline-flex;
  flex-direction: column;
  width: auto;
  transition: transform 0.3s, box-shadow 0.3s;
  max-width: 270px;
  max-height: 420px;
}

.finish-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.08);
}

.container-img-home {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.img-home {
  width: 100%;
  max-width: 100%;
  height: auto;
  display: block;
  border-radius: 10px 10px 0 0;
}

.container-text-home {
  display: flex;
  flex-direction: column;
  align-items: start;
  text-align: left;
  padding: 10px;
}

.router-link {
  text-decoration: none;
  color: inherit;
}

a {
  text-decoration: none;
  color: inherit;
}

a:hover {
  text-decoration: none;
}

.back-next {
  display: inline-block;
  margin-top: 20px;
}
</style>
