<template>
  <header id="header">
    <nav>
      <ul>
        <li>
          <router-link to="/clientes" class="hover">HOME</router-link>
        </li>
        <li>
          <router-link to="/clientes" class="hover">ABOUT</router-link>
        </li>
        <li>
          <router-link to="/clientes" class="hover">CLIENTES</router-link>
        </li>
        <li>
          <button class="logout hover" @click="onLogout">SALIR</button>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  methods: {
    onLogout() {
      this.$store.dispatch("logout");
    }
  }
};
</script>

<style lang="sass" scoped>
#header
  height: 56px;
  display: flex;
  justify-content: center;
  background: inherit;
  padding: 0 20px;

nav
  height: 100%;

ul
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100%;
  display: flex;
  flex-flow: row;
  align-items: center;

li
  margin: 0 16px;

li a
  text-decoration: none;
  color: black;
  font-weight: bold;

li .hover:hover,
li .hover:active
  color: #3B68D5;

.logout
  background-color: transparent;
  border: none;
  font: inherit;
  cursor: pointer;
  font-weight: bold;
</style>
