import Vue from 'vue';
import Vuex from 'vuex';
import * as usersStore from '@/store/users';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  modules: {
    users: usersStore,
  },
});
