<script>

export default {
  name: "organizer-card",
  title: "Organizer Card",

  props: ['organizadores'],

  data() {
    return {
      premiumPlan: {
        planName: "Corporate",
        price: "S/39.90/month",
        benefits: [
          "Unlimited space listings.",
          "Highlight listings in search results.",
          "Access to basic analytical tools.",
        ],
      },
      standarPlan: {
        planName: "Standard",
        price: "S/19.90/month",
        benefits: [
          "Listing of up to 5 spaces.",
          "Advanced booking functionalities.",
          "Inclusion of images per space.",
        ],
      },
      basicPlan: {
        planName: "Basic",
        price: "Free",
        benefits: [
          "Listing of up to 2 spaces.",
          "Owner profile with basic space information.",
        ],
      }
    };
  },
};

</script>

<template>
  <h1 class="type-tittle">Organizador</h1>
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
          <li v-for="benefits in premiumPlan.benefits" :key="standarPlan.benefits" style="margin-bottom: 20px;">
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

.type-tittle{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 25vh;
  margin: 0;
  font-size: 45px;
}

.card-container{
  display: flex;
  flex-grow: 1;
  flex-wrap: wrap;
}

.subscription-card {
  width: 400px;
  min-width: 400px;
  margin: 0 auto 9vh auto;
  padding: 1rem;
  border: 1px solid #faefef;
  border-radius: 23px;
  box-shadow: 0 0 51px rgba(0, 0, 0, 0.25);
  height: 500px;
}

.planname {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.benefits {
  list-style-type: none;
  padding-left: 1rem;
  font-size: 20px;
}

.choose-plan {
  background-color: #d13333;
  display: block;
  width: 70%;
  border-radius: 8px;
  padding: 10px 20px;
  cursor: pointer;
  font-weight: bold;
  margin: 1% auto auto auto;
}

.price {
  display: flex;
  justify-content: center;
  font-weight: bold;
  font-size: 30px;
}

@media (max-width: 768px) {
  .subscription-card {
    width: 200px;
    height: 400px;
    margin-top: 5%;
  }
  .choose-plan {
    width: 100%;
    padding: 10px 10px;
    margin-top: 0;
  }
  .benefits {
    font-size: 8px;
    padding-left: 0;
    margin-bottom: 0;
  }
}


@media (max-width: 768px) {
  .subscription-card {
    width: 200px;
    height: 400px;
    margin-top: 5%;
  }

  .choose-plan {
    width: 100%;
    padding: 10px 10px;
    margin-top: 0;
  }

  .benefits {
    font-size: 8px;
    padding-left: 0;
    margin-bottom: 0;
  }
}

</style>