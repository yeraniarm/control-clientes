import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

import router from "../router/index";

export default new Vuex.Store({
  state: {
    idToken: null,
    userId: null,
    clients: null, 
    client: null
  },
  mutations: {
    authUser(state, userData) {
      state.idToken = userData.token;
      state.userId = userData.userId;
    },
    clearAuthData(state) {
      state.idToken = null;
      state.userId = null;
    },
    storedClients(state, clientsArray) {
      state.clients = clientsArray;
    }, 
    storedClient(state, client) {
      state.client = client;
    }
  },
  actions: {
    login({ commit }, authData) {
      axios
        .post("/login", {
          user: authData.user,
          pass: authData.pass
        })
        .then(res => {
          if (res.status === 200) {
            let token = res.data.token;
            commit("authUser", {
              token,
              userId: res.data.data._id
            });
            localStorage.setItem("token", token);
            localStorage.setItem("userId", res.data.data._id);
            router.replace("/clientes");
          }
        })
        .catch(err => {
          console.log(err);
          alert(err.response.data.error);
        });
    },
    tryAutoLogin({ commit }) {
      const token = localStorage.getItem("token");
      if (!token) {
        return;
      }
      const userId = localStorage.getItem("userId");
      commit("authUser", {
        token,
        userId
      });
      router.replace("/clientes");
    },
    logout({ commit }) {
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
      commit("clearAuthData");
      router.replace("/login");
    },
    storeClient({ state }, clientData) {
      if (!state.idToken) {
        return;
      }
      axios
        .post("/clientes/crear", clientData, {
          headers: { token: state.idToken }
        })
        .then(res => {
          console.log(res);
          this.dispatch("fetchClient");
        })
        .catch(err => console.log(err));
    },
    fetchClient({ commit, state }) {
      if (!state.idToken) {
        return;
      }
      axios
        .get("/clientes", {
          headers: { token: state.idToken }
        })
        .then(res => {
          console.log(res);
          let clients = res.data.data;
          let clientsNewArray = [];
          clients.forEach(client => {
            client = {
              id: client._id,
              nombre: client.nombre,
              rfc: client.rfc,
              telefono: client.telefono
            };
            clientsNewArray.push(client);
          });
          commit("storedClients", clientsNewArray);
          commit("storedClient", clients);
        })
        .catch(err => console.log(err));
    },
    updateClient({ state }, data) {
      if (!state.idToken) {
        return;
      }
      const index = localStorage.getItem("clientId");
      console.log(index);
      axios
        .put(`/clientes/modificar/${index}`, data, {
          headers: { token: state.idToken }
        })
        .then(res => {
          console.log(res);
          this.dispatch("fetchClient");
        })
        .catch(err => console.log(err));
    },
    deleteClient({ state }, index) {
      if (!state.idToken) {
        return;
      }
      axios
        .delete(`/clientes/eliminar/${index}`, {
          headers: { token: state.idToken }
        })
        .then(res => {
          console.log(res);
          this.dispatch("fetchClient");
        })
        .catch(err => console.log(err));
    }
  },
  getters: {
    getClients(state) {
      return state.clients;
    }, 
    getClient(state) {
      return state.client;
    }
  },
  modules: {}
});
