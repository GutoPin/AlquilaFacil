<template>
  <div class="about text-bluegray-900 text-center lg:text-justify mx-auto max-w-screen-lg">
    <p class="text-2xl md:text-4xl lg:text-6xl font-bold my-14">Acerca de</p>
    <div class="my-5">
      <p class="font-bold text-xl md:text-2xl lg:text-3xl">Somos AlquilaFacil.</p>
      <p class="text-xs md:text-lg lg:text-xl leading-relaxed mt-4">
        AlquilaFacil es una aplicación web donde los propietarios de diversos tipos de espacios (como salones de eventos, jardines, locales comerciales, casas, etc.) pueden registrar sus lugares para ser alquilados con el propósito de celebrar eventos.<br>
        Por otro lado, los organizadores de eventos pueden buscar y reservar estos espacios según sus necesidades específicas.<br>
        Ya sea para bodas, conferencias, fiestas, reuniones corporativas o alojamientos temporales, tenemos el lugar perfecto para tu evento.<br>
      </p>
    </div>
    <div class="my-6 ml-4">
      <ul class="list-disc text-sm md:text-lg lg:text-xl">
        <li class="mb-2">Registro fácil y rápido para propietarios.</li>
        <li class="mb-2">Búsqueda y reserva personalizada para organizadores.</li>
        <li>Interacción directa con los propietarios de los espacios.</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheAbout"
}
</script>

<style scoped>
.about {
  padding: 2rem;
  background-color: #f7fafc; /* Color de fondo para mejorar el contraste */
}
@media (min-width: 1024px) {
  .about {
    padding: 4rem;
  }
}
</style>
