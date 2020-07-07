import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

import router from '../router/index';

export default new Vuex.Store({
  state: {
    idToken: null,  
    userId: null, 
    clients: null
  },
  mutations: {
    authUser (state, userData) {
      state.idToken = userData.token;
      state.userId = userData.userId;
    }, 
    clearAuthData (state) {
      state.idToken = null;
      state.userId = null;
    }, 
    storedClients (state, clientsArray){
      state.clients = clientsArray;
    }
  },
  actions: {
    login ({commit}, authData) {
      axios.post('/login', {
        user: authData.user, 
        pass: authData.pass
    }) 
        .then(res => {
            console.log(res);
            console.log(res.data.status);
            //Validación con status porque la api siempre regresa un 200 aunque la autenticación no sea correcta
            if(res.data.status) {
                let token = res.data.data.token;
                commit('authUser', {
                  token,
                  userId: res.data.data.idUsuario
                });
                console.log(token);
                localStorage.setItem('token', token);
                localStorage.setItem('userId', res.data.data.idUsuario);
                router.replace('/clientes');
            } else {
                alert(res.data.error);
            }
        })
        .catch(err => console.log(err));
    },
    tryAutoLogin ({commit}) {
      const token = localStorage.getItem('token');
      if (!token) {
        return;
      }
      const userId = localStorage.getItem('userId');
      commit('authUser', {
        token, 
        userId
      });
      router.replace('/clientes');
    },
    logout ({commit}) {
      localStorage.removeItem('token');
      localStorage.removeItem('userId');
      commit('clearAuthData');
      router.replace('/login');
    },
    storeClient ({commit, state}, clientData) {
      if(!state.idToken){
        return;
      }
      axios.post('/clientes/crear', clientData, {
        headers: { token: state.idToken }
      })
        .then(res => console.log(res))
        .catch(err => console.log(err));
    },
    fetchClient ({commit, state}) {
      if(!state.idToken){
        return;
      }
      axios.get('/clientes', {
        headers: { token: state.idToken }
      })
        .then(res => {
          console.log(res);
          let clients = res.data.data;
          let clientsNewArray = [];
          clients.forEach(client => {
            if(!client.celular){
              client.celular = "-"
            }
            client = {
              id: client.id,
              nombre: client.nombre, 
              rfc: client.rfc,
              telefono: client.celular
            };
            clientsNewArray.push(client);
          });
          commit('storedClients', clientsNewArray);
        })
        .catch(err => console.log(err));
    }
  },
  getters: {
    getClients (state) {
      return state.clients;
    }
  },
  modules: {}
});
