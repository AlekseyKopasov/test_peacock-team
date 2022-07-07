import Vue from 'vue';
import Vuex from 'vuex';
// eslint-disable-next-line import/no-cycle
import searchUser from '@/api';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    isAuthorization: false,
    users: [
      {
        id: 1,
        name: 'Alex',
      },
      {
        id: 2,
        name: 'Mark',
      },
      {
        id: 3,
        name: 'Sasha',
      },
      {
        id: 4,
        name: 'Ivan Kasparov',
      },
    ],
  },
  getters: {
    getUsers(state) {
      return state.users;
    },
    getAuthorizationStatus(state) {
      return state.isAuthorization;
    },
  },
  mutations: {
    add(state, data) {
      console.log(state);
      console.log(data);
      const result = searchUser(data);
      console.log(result);
      // const newUser = {
      //   id: 1,
      //   name: data,
      // };
      // state.users.push(newUser);
    },
    changeStatus(state, status) {
      state.isAuthorization = status;
    },
  },
  actions: {
    addUser({ commit }, user) {
      commit('add', user);
    },
    searchUser({ commit }, data) {
      commit('add', data);
    },
    changeAuthStatus({ commit }, status) {
      commit('changeStatus', status);
    },
  },
});

export default store;
