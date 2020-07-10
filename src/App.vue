<template>
  <div id="app">
    <app-login></app-login>
    <app-clientes></app-clientes>
    <router-view />
  </div>
</template>

<script>
import Login from "./views/Login/Login.vue";
import Clientes from "./views/Clientes/Clientes.vue";

export default {
  components: {
    "app-login": Login,
    "app-clientes": Clientes
  },
  created() {
    this.$store.dispatch("tryAutoLogin");
  }
};
</script>

<style lang="sass">
body, html
  margin: 0;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
</style>
