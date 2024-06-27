<script>
import {SignInRequest} from "../model/sign-in.request.js";
import {useAuthenticationStore} from "../services/authentication.store.js";

export default {
  name: 'the-user-login',
  props: {
    showLogin: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    onSignIn() {
      let authenticationStore = useAuthenticationStore();
      let signInRequest = new SignInRequest(this.username, this.password);
      authenticationStore.signIn(signInRequest, this.$router);
      //this.$emit('login-success', { username });
      this.$emit('update:showLogin', false);

    },
    closeLogin() {
      this.$emit('update:showLogin', false);
    },
    /*login() {
      if (this.email === 'italo@web.com' && this.password === '123456') {
        this.$emit('login-success', { name: 'Italo', email: this.email });
      } else {
        alert('Credenciales incorrectas');
      }
    }*/
  }
}
</script>

<template>
  <section v-if="showLogin" class="user-login flex justify-content-center align-items-center fixed" @click.self="closeLogin">
    <pv-card class="login-card max-w-md border-round-2xl">
      <template #title>
        <h4 class="text-center font-bold px-8">Sign In</h4>
      </template>
      <template #content>
        <form class="card flex justify-content-center w-full" @submit.prevent="onSignIn">
          <div class="flex flex-column w-full px-4">
            <label class="text-sm mb-1" for="email">Email</label>
            <pv-inputtext v-model="username" id="username" class="text-sm mb-2 w-full" placeholder="Ingresa tu correo" aria-label="Correo electrónico"/>

            <label class="text-sm mb-1" for="password">Password</label>
            <pv-inputtext v-model="password" id="password" class="text-sm mb-2 w-full" placeholder="Ingresar contraseña" aria-label="Contraseña">
              <template #prepend>
                <i class="pi pi-lock"></i>
              </template>
            </pv-inputtext>

            <div class="flex justify-content-center mt-4 w-full">
              <pv-button class="styled-button text-sm w-full" label="Sign In" plain text aria-label="Iniciar sesión" type="submit"/>
            </div>
            <router-link to="/forgot-password" class="mt-2">
              <h5 class="text-center m-1" @click="closeLogin">Forgot your password?</h5>
            </router-link>
          </div>
        </form>
        <hr class="border-white mt-4">
      </template>
      <template #footer>
        <div class="flex justify-content-center flex-column w-full px-5">
          <div class="flex justify-content-center gap-3 align-items-center w-full">
            <h5 class="text-center">You do not have an account?</h5>
            <router-link to="/register">
              <h5 class="text-center text-white" @click="closeLogin">Sign Up</h5>
            </router-link>
          </div>
        </div>
      </template>
    </pv-card>
  </section>
</template>


<style scoped>
.user-login {
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  z-index: 9999;
  background-color: rgba(255, 255, 255, 0.5);
}

.login-card {
  background-color: #c53030;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}


.styled-button {
  background-color: #ffffff;
  color: #c53030;
  border: 2px solid #c53030;
  border-radius: 0.5rem;
  transition: background-color 0.3s, color 0.3s;
}

.styled-button:hover {
  background-color: darkgray;
  color: #ffffff;
}

.text-sm {
  margin-bottom: 0.5rem; /* Adjusted margin for minimalistic spacing */
}
</style>
