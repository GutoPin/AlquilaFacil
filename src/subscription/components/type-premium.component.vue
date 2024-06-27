<script>
export default {
  name: "type-card",
  title: "Type Card",

  props: {
  },
  methods: {
    selectPlan(role) {
      this.$emit('plan-selected', role)
    }
  },
  data() {
    return{
      drawer: false,
      items1: [{label: 'Propietario', to: '/proprietary'},],
      items2: [{label: 'Organizador', to: '/organizer'},],
    }

  },
};

</script>

<template>
  <h1 class="type-tittle">First of all choose your premium type</h1>
  <div class="card-container">

    <pv-card class="subscription-card">
      <template #content>
        <img class="card-image"
             src="https://github.com/Aplicaciones-Web-SW56-AlquilaFacil/Frontend/blob/develop/frontend/src/assets/organizer-image.png?raw=true"
             alt="Propietary">
      </template>
      <template #footer>
        <router-link v-for="item in items1" :key="item.label" v-slot="{ navigate, href}" :to="item.to" custom>
          <pv-button :href="href" class="choose-plan" @click="navigate">
            {{ item.label }}
          </pv-button>
        </router-link>

      </template>
    </pv-card>

    <pv-card class="subscription-card">
      <template #content>
        <img class="card-image"
             src="https://github.com/Aplicaciones-Web-SW56-AlquilaFacil/Frontend/blob/develop/frontend/src/assets/proprietary-image.png?raw=true"
             alt="Organizator">
      </template>
      <template #footer>
        <router-link v-for="item in items2" :key="item.label" v-slot="{ navigate, href}" :to="item.to" custom>
          <pv-button :href="href" class="choose-plan" @click="navigate">
            {{ item.label }}
          </pv-button>
        </router-link>
      </template>
    </pv-card>
  </div>
</template>

<style scoped>
.card-image {
  display: block;
  margin: 20px auto auto auto;
}

@media (max-width: 768px) {
  .card-image {
    width: 150px;
  }
}

</style>