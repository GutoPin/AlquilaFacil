<template>
  <footer class="footer bg-red-600 p-5 text-white border-transparent">
    <div aria-label="The footer content" class="flex flex-row justify-content-center align-items-center md:flex-column md:gap-3 gap-5">
      <div aria-label="Company logo and name" class="footer-logo flex md:flex-row flex-column md:align-items-center align-items-start justify-content-center gap-3 ">
        <img src="../../assets/logo.png" alt="AlquilaFácil Logo" width="50" />
        <h2> AlquilaFácil </h2>
      </div>
      <div class="flex gap-3 flex md:flex-row flex-column md:align-items-center align-items-start" aria-label="Social media links" >
        <pv-inputicon class="pi pi-facebook text-2xl" aria-label="Link to Facebook" />
        <pv-inputicon class="pi pi-twitter text-2xl" aria-label="Link to Twitter" />
        <a href="https://www.instagram.com/tatoooft/" target="_blank"><pv-inputicon class="pi pi-instagram text-2xl" aria-label="Link to Instagram"/></a>
        <pv-inputicon class="pi pi-youtube text-2xl" aria-label="Link to Youtube" />
      </div>
      <div aria-label="Footer navigation links" class="flex md:gap-5 gap-3 footer-links flex md:flex-row flex-column md:items-center items-start">
        <router-link to="/about">
          <p>About</p>
        </router-link>
        <router-link to="/home">
          <p>Home</p>
        </router-link>
        <router-link to="/type-subscription">
          <p>Subscriptions</p>
        </router-link>
        <router-link to="/start">
          <p>Post your space</p>
        </router-link>
      </div>
    </div>
    <div class="copyright mt-3" aria-label="Copyright Information">
      <p> Copyright &copy; 2024 AlquilaFácil. All rights reserved </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterContent',
}
</script>

<style scoped>
html, body, #app {
  height: 100%;
  margin: 0;
}

#app {
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
}

.footer {
  width: 100%;
  background-color: #b91c1c; /* bg-red-600 */
  padding: 1.25rem; /* p-5 */
  color: white;
  border-color: transparent;
}

.pi {
  cursor: pointer;
}

.footer-links p {
  cursor: pointer;
  transition: transform 0.3s;
}

.footer-links p:hover {
  transform: scale(1.1);
}

.footer-logo {
  font-size: 0.9rem;
  transition: transform 0.3s;
}

.footer-logo:hover {
  transform: scale(1.05);
}

.footer-logo {
  cursor: pointer;
}

.copyright p {
  text-align: center;
}

@media (max-width: 768px) {
  .footer-logo, .footer-links, .copyright {
    text-align: center;
  }
}

@media (max-width: 480px) {
  .footer-logo h2 {
    font-size: 0.8rem;
  }
}
</style>
