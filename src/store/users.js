import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const usersStore = new Vuex.Store({
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
      state.users.push(user);
    },
  },
  actions: {
    addUser(user) {
      this.add(user);
    },
  },
});

export default usersStore;
