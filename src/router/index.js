import Vue from "vue";
import VueRouter from "vue-router";

import store from "../store/index.js";

import LoginPage from "../views/Login/Login.vue";
import ClientsPage from "../views/Clientes/Clientes.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: LoginPage },
  { path: "/login", component: LoginPage, name: "login" },
  {
    path: "/clientes",
    component: ClientsPage,
    name: "clientes",
    beforeEnter(to, from, next) {
      if (store.state.idToken) {
        next();
      } else {
        next("/login");
      }
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
//export default new VueRouter({mode: 'history', routes});
export default router;
