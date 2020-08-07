import Vue from "vue";
import App from "./App.vue";
import axios from "axios";

import router from "./router/index.js";
import store from "./store/index.js";

axios.defaults.baseURL = "https://vibrant-choucroute-83564.herokuapp.com/api";
//"https://reclutamiento.vue.contro-clientes.hmhsistemas.com.mx/api";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
