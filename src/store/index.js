import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    choice: ['c', 'a', 'd', 'd', 'b', 'b', 'a', 'c'],
  },
  mutations: {
    increment(state, v) {
      state.choice = v;
    },
  },
});
