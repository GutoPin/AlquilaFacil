<template>
  <div class="container" v-if="local">
    <h1 class="title">{{ local.localCategory.name }} {{ local.localType }}</h1>

    <div class="image-grid">
      <div class="large-image">
        <img :src="local.photoUrl" alt="Property Image" class="rounded-image">
      </div>
    </div>

    <div class="details">
      <div class="description">
        <h2 class="subtitle">{{ local.cityPlace }}</h2>
        <p class="info"><strong>Address:</strong> {{ local.streetAddress }}</p>
        <p class="info"><strong>Owner:</strong> Italo</p> <!-- poner nombre real del user -->

        <div class="description-text">
          <h3 class="bold">Description:</h3>
          <p>{{ local.descriptionMessage }}</p>
        </div>

        <p class="info price"><strong>Price:</strong> S/. {{ local.nightPrice }} per night</p>
      </div>

      <form class="contact" @submit.prevent="handleSubmit">
        <h2 class="contact-title">Contact</h2>

        <div class="input-group">
          <input type="text" v-model="name" placeholder="Name" class="input-field">
        </div>

        <div class="input-group">
          <input type="text" v-model="lastName" placeholder="Last Name" class="input-field">
        </div>

        <div class="input-group">
          <input type="text" v-model="phone" placeholder="Phone" class="input-field">
        </div>

        <div class="input-group">
          <input type="email" v-model="email" placeholder="Email" class="input-field">
        </div>

        <div class="input-group">
          <textarea v-model="message" placeholder="Message (optional)" class="textarea-field"></textarea>
        </div>

        <button type="submit" class="button">Book</button>
      </form>
    </div>
  </div>
  <div v-else class="not-logged-in">
    <img src="https://png.pngtree.com/png-vector/20230808/ourmid/pngtree-person-waving-vector-png-image_6893930.png" alt="Placeholder" class="placeholder-image">
    <p class="message">No estás logueado. Por favor, <router-link to="/login" class="login-link">inicia sesión</router-link> para ver los detalles de la propiedad.</p>
  </div>
</template>

<script>
import { CardEndpoint } from "../services/card-endpoint.service.json.js";

export default {
  name: "the-property-detail",
  props: ['id'],
  data() {
    return {
      local: null,
      localsService: new CardEndpoint(),
      name: '',
      lastName: '',
      phone: '',
      email: '',
      message: '',
    }
  },
  created() {
    this.loadLocal(this.id);
  },
  watch: {
    id(newId) {
      this.loadLocal(newId);
    }
  },
  methods: {
    loadLocal(localId) {
      this.localsService.getLocalById(localId)
          .then(response => {
            this.local = response.data;
            console.log('Selected local:', this.local);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
    },
    handleSubmit() {
      const contactResource = {
        name: this.name,
        lastname: this.lastName,
        phone: this.phone,
        email: this.email,
        message: this.message,
        propertyId: this.local.id,
      };

      this.localsService.createContact(contactResource)
          .then(response => {
            console.log('Contact created:', response.data);
          })
          .catch(error => {
            console.error('Error creating contact:', error);
          });
    }
  }
}
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 28px;
}

.title {
  font-size: 2rem;
  font-weight: bold;
  margin: 20px 0;
  text-align: center;
  color: #333;
}

.image-grid {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  width: 100%;
  max-width: 800px;
}

.large-image {
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.large-image::after {
  content: '';
  display: block;
  padding-bottom: 56.25%; /* Aspect ratio 16:9 */
}

.large-image img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 15px;
}

.details {
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
  gap: 20px;
}

.description {
  width: 100%;
}

.subtitle {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: #555;
}

.info {
  color: #666;
  margin-bottom: 10px;
  font-size: 1rem;
}

.bold {
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: #333;
}

.description-text {
  background-color: #f9f9f9;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 20px;
}

.price {
  font-size: 1.25rem;
  font-weight: bold;
  color: #d13333;
}

.contact {
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.contact-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 16px;
  text-align: center;
}

.input-group {
  margin-bottom: 16px;
}

.input-field,
.textarea-field {
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.input-field:focus,
.textarea-field:focus {
  border-color: #d13333;
  outline: none;
}

.textarea-field {
  min-height: 120px;
  resize: vertical;
}

.button {
  width: 100%;
  padding: 12px 20px;
  background-color: #d13333;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 1.125rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.button:hover {
  background-color: #b52b2b;
}

.not-logged-in {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
}

.placeholder-image {
  width: 600px;
  height: 400px;
  object-fit: contain;
  margin-bottom: 20px;
}

@media(max-width: 768px){
  .details{
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    padding: 15px;
  }
  .image-grid{
    max-width: 100%;
    padding: 15px;
  }
}

@media (max-width: 600px) {
  .title {
    font-size: 1.75rem;
  }


  .image-grid {
    max-width: 100%;
    padding: 10px;
  }
  .details{
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    padding: 10px;
  }

  .details {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    padding: 10px;
  }

  .description {
    width: 100%;
  }

  .info {
    font-size: 0.875rem;
  }

  .contact {
    width: 100%;
    padding: 15px;
  }

  .button {
    padding: 10px 16px;
  }
}

.message {
  font-size: 1.5rem;
  color: #333;
}

.login-link {
  color: #d13333;
  text-decoration: underline;
  cursor: pointer;
}

.login-link:hover {
  color: #c12e2e;
}
</style>
