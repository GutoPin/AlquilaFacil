<template>
  <div class="search-container">
    <div class="search-bar">
      <label for="search" class="search-label">Find</label>
      <div class="search-input-container">
        <input type="text" id="search" class="search-input" v-model="query" placeholder="Enter the title"/>
        <button @click="search" class="search-button">
          <i class="pi pi-search"></i>
        </button>
      </div>
    </div>
  </div>

  <div class="container">
    <TheHome :query="query" class="home-card"></TheHome>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import TheHome from "../components/the-home.component.vue";

export default defineComponent({
  components: { TheHome },
  data() {
    return {
      query: ''
    };
  },
  methods: {
    search() {
      console.log("Searching for:", this.query);
    }
  }
});
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.search-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px;
  margin-top: 20px;
}

.search-bar {
  display: flex;
  align-items: center;
  border: 2px solid #D13333;
  border-radius: 35px;
  padding: 10px;
  width: 100%;
  max-width: 600px;
  background-color: white;
}

.search-label {
  font-weight: bold;
  margin-left: 15px;
}

.search-input-container {
  display: flex;
  align-items: center;
  flex: 1;
  margin-left: 15px;
}

.search-input {
  border: none;
  outline: none;
  padding: 5px;
  flex: 1;
  border-radius: 4px;
}

.search-button {
  background-color: #D13333;
  border: none;
  border-radius: 50%;
  color: white;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-left: 10px;
}

.search-button:hover {
  background-color: #c12e2e;
}

.search-button i {
  font-size: 1.2em;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 1200px;
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

@media (min-width: 769px) and (max-width: 1024px) {
  .search-bar {
    max-width: 500px;
    padding: 8px;
  }

  .search-input {
    margin-left: 10px;
  }

  .search-button i {
    font-size: 1em;
  }

  .search-button {
    width: 35px;
    height: 35px;
    margin-left: 5px;
  }

  .grid {
    grid-template-columns: repeat(4, 1fr);
    gap: 45px;
  }
}

@media (min-width: 601px) and (max-width: 768px) {
  .search-bar {
    max-width: 320px;
    border-radius: 35px;
    padding: 5px;
  }

  .search-input {
    margin-left: 5px;
  }

  .search-button i {
    font-size: 1em;
  }

  .search-button {
    width: 35px;
    height: 35px;
    margin-left: 1px;
  }

  .grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
}

@media (max-width: 600px) {
  .search-bar {
    max-width: 250px;
    padding: 5px;
  }

  .search-label {
    margin-left: 5px;
    font-size: 12px;
  }

  .search-input-container {
    margin-left: 1px;
  }

  .search-input {
    margin-left: 5px;
    font-size: 12px;
  }

  .search-button {
    width: 30px;
    height: 30px;
    margin-left: 5px;
  }

  .search-button i {
    font-size: 0.8em;
  }

  .grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
}
</style>
