<script>
import { CardEndpoint } from "../services/card-endpoint.service.json.js";

export default {
  name: "the-home",
  props: {
    query: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      locals: [],
      filteredLocals: [],
      local: null,
      localsService: null,
      filters: {},
    }
  },
  created() {
    this.localsService = new CardEndpoint();
    this.localsService.getAllLocals()
        .then(response => {
          console.log('Response data1:', response.data);
          this.locals = response.data.map(local => {
            return {
              id: local.id,
              localType: local.localType,
              nightPrice: local.nightPrice,
              photoUrl: local.photoUrl,
              cityPlace: local.cityPlace,
              streetAddress: local.streetAddress,
              descriptionMessage: local.descriptionMessage,
              localCategory: local.localCategory
            };
          });
          this.filterLocals();
        })
        .catch(error => {
          console.error('Error fetching data1:', error);
        });
  },
  watch: {
    query() {
      this.filterLocals();
    }
  },
  methods: {
    filterLocals() {
      if (this.query) {
        const queryLowerCase = this.query.toLowerCase();
        this.filteredLocals = this.locals.filter(local =>
            local.localType.toLowerCase().includes(queryLowerCase) ||
            local.streetAddress.toLowerCase().includes(queryLowerCase) ||
            local.cityPlace.toLowerCase().includes(queryLowerCase)
        );
      } else {
        this.filteredLocals = this.locals;
      }
    }
  }
}
</script>

<template>
  <div class="grid">
    <pv-card class="home-card" v-for="local in filteredLocals" :key="local.id">
      <template #content>
        <router-link :to="`/home-detail/${local.id}`" class="router-link">
          <div class="container-img-home">
            <img :src="local.photoUrl" alt="home" class="img-home">
          </div>
          <div class="container-text-home">
            <div style="color: black;">
              <p>{{ local.localType }}</p>
              <p class="text-gray-500">{{ local.streetAddress }}</p>
              <p><strong>S/. {{ local.nightPrice }} </strong> per night</p>
            </div>
          </div>
        </router-link>
      </template>
    </pv-card>
  </div>
  <div v-if="filteredLocals.length === 0" class="no-results">
    <p>No results found for "{{ query }}"</p>
    <img class="card-image"
         src="https://github.com/Aplicaciones-Web-SW56-AlquilaFacil/Frontend/blob/main/frontend/src/assets/placeholder.png?raw=true"
         alt="PlaceHolder">
  </div>
</template>

<style>
.home-card {
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
  margin: 20px 0;
  display: inline-flex;
  flex-direction: column;
  width: auto;
  transition: transform 0.3s, box-shadow 0.3s;
}

.home-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.08);
}

.container-img-home {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.no-results {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.card-image {
  width: 100%;
  height: auto;
}

.img-home {
  width: 100%;
  max-width: 100%;
  height: auto;
  display: block;
}

.container-text-home {
  display: flex;
  flex-direction: column;
  align-items: start;
  text-align: left;
  width: 100%;
  box-sizing: border-box;
}

.router-link {
  text-decoration: none;
}

a {
  text-decoration: none;
  color: inherit;
}

a:hover {
  text-decoration: none;
}
@media (min-width: 1201px) {
  .home-card {
    display: inline-flex;
    width: auto;
    max-width: 270px;
    max-height: 375px;
  }

  .container-img-home {
    width: 100%;
  }

  .img-home {
    width: 100%;
    max-width: 100%;
    height: auto;
  }

  .container-text-home {
    max-width: 100%;
    box-sizing: border-box;
    text-align: left;
    margin: 0 auto;
    font-size: 15px;
  }
  .grid {
    grid-template-columns: repeat(4, 1fr);
    gap: 50px;
    display: grid;
  }
  .card-image {
    width: 90%;
    height: auto;
  }
}

@media (min-width: 1025px) and (max-width: 1200px) {
  .home-card {
    display: inline-flex;
    width: auto;
    max-width: 270px;
    max-height: 345px;
  }

  .container-img-home {
    width: 100%;
  }

  .img-home {
    width: 100%;
    max-width: 100%;
    height: auto;
  }

  .container-text-home {
    max-width: 100%;
    box-sizing: border-box;
    text-align: left;
    margin: 0 auto;
    font-size: 15px;
  }
  .grid {
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
    display: grid;
  }
  .card-image {
    width: 70%;
    height: auto;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .home-card {
    border-radius: 13px;
    display: inline-flex;
    width: auto;
    max-width: 190px;
    max-height: 280px;
  }

  .container-img-home {
    width: 100%;
  }

  .img-home {
    width: 100%;
    max-width: 100%;
    height: auto;
  }

  .container-text-home {
    max-width: 100%;
    box-sizing: border-box;
    text-align: left;
    margin: 0 auto;
    font-size: 13px;
  }
  .grid {
    grid-template-columns: repeat(4, 1fr);
    gap: 25px;
    display: grid;
  }
  .card-image {
    width: 60%;
    height: auto;
  }
}

@media (min-width: 601px) and (max-width: 768px) {
  .home-card {
    border-radius: 13px;
    display: inline-flex;
    width: auto;
    max-width: 210px;
    max-height: 300px;
  }

  .container-img-home {
    width: 100%;
  }

  .img-home {
    width: 100%;
    max-width: 100%;
    height: auto;
  }

  .container-text-home {
    max-width: 100%;
    box-sizing: border-box;
    text-align: left;
    margin: 0 auto;
    font-size: 13px;
  }
  .grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    display: grid;
  }
  .card-image {
    width: 60%;
    height: auto;
  }
}

@media (max-width: 600px) {
  .home-card {
    border-radius: 13px;
    display: inline-flex;
    width: auto;
    max-width: 150px;
    max-height: 210px;
  }

  .container-img-home {
    width: 100%;
  }

  .img-home {
    width: 100%;
    max-width: 80%;
    height: auto;
  }

  .container-text-home {
    max-width: 80%;
    box-sizing: border-box;
    text-align: left;
    margin: 0 auto;
    font-size: 10px;
  }
  .grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
    display: grid;
  }
  .card-image {
    width: 50%;
    height: auto;
  }
}
</style>
