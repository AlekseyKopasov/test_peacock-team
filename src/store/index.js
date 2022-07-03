import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
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
  },
  mutations: {
    add(state, user) {
      const newUser = {
        id: 1,
        name: user,
      };
      state.users.push(newUser);
    },
  },
  actions: {
    addUser({ commit }, user) {
      console.log(user);
      commit('add', user);
    },
  },
});

export default store;
