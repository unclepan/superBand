import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    choice: [],
  },
  mutations: {
    increment(state, v) {
      state.choice.push(v);
    },
    reset(state, v) {
      state.choice = [];
    },
  },
});
