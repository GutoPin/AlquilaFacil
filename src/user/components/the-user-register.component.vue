<script>
import axios from 'axios';
import {AuthenticationService} from "../services/authentication.service.js";

export default {
  name: "sign-up",
  props: {
    isEdit: {
      type: Boolean,
      default: false
    },
    userData: {
      type: Object,
      default: () => ({
        username: '',
        first_name: '',
        father_name: '',
        mother_name: '',
        birth_date: '',
        phone_number: '',
        document_number: '',
      })
    }
  },
  data() {
    return {
      username: "",
      password: "",
      first_name: "",
      father_name: "",
      mother_name: "",
      birth_date: "",
      phone_number: "",
      document_number: "",
      authService: new AuthenticationService(),

    };

  },
  methods: {
    async submitForm() {
      const userData = {
        username: this.username,
        password: this.password,
        name: this.first_name,
        fatherName: this.father_name,
        motherName: this.mother_name,
        dateOfBirth: this.birth_date,
        documentNumber: this.document_number,
        phone: this.phone_number
      };

      console.log(JSON.stringify(userData, null, 2));

      try {
        const response = await this.authService.signUp(userData);
        console.log("Data sent successfully:", response.data);
      } catch (error) {
        console.error("Error sending data:", error);
      }
    }
  }
};
</script>


<template>
  <section class="flex justify-content-center align-items-center" aria-label="User Form">
    <div class="form-container pt-7 pb-7">
      <form @submit.prevent="submitForm" class="form pl-6 pt-4">
        <div class="flex flex-column gap-3">
          <label class="uppercase" for="email">EMAIL*</label>
          <pv-inputtext :invalid="!isEmailValid" v-model="username" class="input-text" id="email"
                        placeholder="Enter your email" aria-label="Correo electrónico"/>

          <div v-if="!isEdit" class="flex flex-column gap-3">
            <label class="uppercase" for="password">PASSWORD*</label>
            <pv-password :input-style="password_input_style" :invalid="!isPasswordValid" id="password" toggle-mask
                         placeholder="Enter your password (6-16 characters)" v-model="password"
                         :prompt-label="'Enter your password (6-16 characters)'"
                         :weak-label="'Enter your password (6-16 characters)'"
                         :medium-label="'Enter your password (6-16 characters)'"
                         :strong-label="'Enter your password (6-16 characters)'" aria-label="Password"/>
          </div>

          <label class="uppercase" for="first_name">FIRST NAME*</label>
          <pv-inputtext :invalid="!isFirstNameValid" v-model="first_name" class="input-text" id="first_name"
                        placeholder="Enter your first name" aria-label="Nombre"/>

          <label class="uppercase" for="father_name">FATHER'S NAME*</label>
          <pv-inputtext :invalid="!isFatherNameValid" v-model="father_name" class="input-text" id="father_name"
                        placeholder="Enter your father's name" aria-label="Nombre del padre"/>

          <label class="uppercase" for="mother_name">MOTHER'S NAME*</label>
          <pv-inputtext :invalid="!isMotherNameValid" v-model="mother_name" class="input-text" id="mother_name"
                        placeholder="Enter your mother's name" aria-label="Nombre de la madre"/>

          <label class="uppercase" for="birth_date">BIRTH DATE (YYYY-MM-DD)*</label>
          <pv-inputtext :invalid="!isBirthDateValid" v-model="birth_date" class="input-text" id="birth_date"
                        placeholder="Enter your birth date" aria-label="Fecha de nacimiento"/>

          <label class="uppercase" for="phone_number">PHONE NUMBER*</label>
          <pv-inputtext :invalid="!isPhoneNumberValid" v-model="phone_number" class="input-text" id="phone_number"
                        placeholder="Enter your phone number" aria-label="Número de teléfono"/>

          <label class="uppercase" for="document_number">DOCUMENT NUMBER*</label>
          <pv-inputtext :invalid="!isDocumentNumberValid" v-model="document_number" class="input-text" id="document_number"
                        placeholder="Enter your document number" aria-label="Número de documento"/>

          <div class="flex align-items-center">
            <label for="is_artist" class="ml-2"> By registering, I accept the Terms of Use and Privacy Policy of
              AlquilaFacil</label>
          </div>

          <h4>AlquilaFacil collects and processes your email address for marketing purposes. You can easily unsubscribe
            at any time via the opt-out link in the marketing emails.</h4>

          <div class="flex justify-content-center gap-2 mt-3 mb-3">
            <router-link to="/home">
            <pv-button class="form-button w-full w-12rem" :label="isEdit ? 'Update Profile'
            : 'Sign Up now'" plain text aria-label="Botón de registro" type="submit"/>
            </router-link>
          </div>
        </div>

      </form>
    </div>
  </section>
</template>

<style scoped>
.form-container {
  width: 80%;
}

.form-button {
  background-color: #c53030;
}

.input-text {
  width: 100%;
  border: none;
  border-bottom: 1px solid #d1d1d1;
}

/* Responsive styles */
@media (max-width: 768px) {
  .form-container {
    width: 90%;
  }

  .input-text, .form-button {
    width: 90%;
  }
}

@media (max-width: 480px) {
  .form-container {
    width: 100%;
  }

  .input-text, .form-button {
    width: 100%;
  }
}
</style>
