<script>
export default {
  name: "proprietary-card",
  title: "Proprietary Card",

  props: ['propietarios'],

  data() {
    return {
      premiumPlan: {
        planName: "Corporate",
        price: "S/44.90/month",
        benefits: [
          "Additional discounts on premium space rental rates.",
          "Priority access to exclusive and popular spaces.",
          "Priority access to exclusive and popular spaces.",
        ],
      },
      standarPlan: {
        planName: "Standard",
        price: "S/24.90/month",
        benefits: [
          "Unlimited search and reservations of spaces.",
          "Exclusive discounts on selected space rental rates.",
        ],
      },
      basicPlan: {
        planName: "Basic",
        price: "Free",
        benefits: [
          "Reservations of up to 2 spaces per month.",
          "Access to ratings and reviews of spaces.",
        ],
      }
    };
  },
};


</script>

<template>
  <h1 class="type-tittle">Propietario</h1>
  <div class="card-container">
    <pv-card class="subscription-card">
      <template #title>
        <label class="price">{{ basicPlan.price }}</label>
      </template>
      <template #content>
        <p class="planname">{{ basicPlan.planName }}</p>
        <hr>
        <ul class="benefits">
          <li v-for="benefits in basicPlan.benefits" :key="basicPlan.benefits" style="margin-bottom: 20px;">
            <i class="pi pi-check-circle"></i>{{ benefits }}</li>
        </ul>
      </template>
      <template #footer>
        <pv-button class="choose-plan" style="margin-top: 21%">Choose Plan</pv-button>
      </template>
    </pv-card>

    <pv-card class="subscription-card">
      <template #title>
        <label class="price">{{ standarPlan.price }}</label>
      </template>
      <template #content>
        <p class="planname">{{ standarPlan.planName }}</p>
        <hr>
        <ul class="benefits">
          <li v-for="benefits in standarPlan.benefits" :key="standarPlan.benefits" style="margin-bottom: 20px;">
            <i class="pi pi-check-circle"></i>{{ benefits }}</li>
        </ul>
      </template>
      <template #footer>
        <pv-button class="choose-plan">Choose Plan</pv-button>
      </template>
    </pv-card>

    <pv-card class="subscription-card">
      <template #title>
        <label class="price">{{ premiumPlan.price }}</label>
      </template>
      <template #content>
        <p class="planname">{{ premiumPlan.planName }}</p>
        <hr>
        <ul class="benefits">
          <li v-for="benefits in premiumPlan.benefits" :key="premiumPlan.benefits" style="margin-bottom: 20px;">
            <i class="pi pi-check-circle"></i>{{ benefits }}</li>
        </ul>
      </template>
      <template #footer>
        <pv-button class="choose-plan">Choose Plan</pv-button>
      </template>
    </pv-card>
  </div>
</template>

<style>
</style>